/**
 * Lightweight HTML sanitizer for user-generated content.
 * Strips dangerous tags and event handler attributes to prevent stored XSS.
 * Preserves iframes from trusted video embed domains (YouTube, Vimeo).
 *
 * For production use with untrusted user input, consider upgrading
 * to DOMPurify when package installation is available.
 */

/** Tags that are always stripped (case-insensitive). */
const DANGEROUS_TAGS = [
    "script",
    "object",
    "embed",
    "applet",
    "form",
    "input",
    "textarea",
    "select",
    "button",
    "link",
    "style",
    "meta",
    "base",
    "svg",
    "math",
];

/** Trusted domains for iframe embeds. */
const TRUSTED_IFRAME_HOSTS = [
    "youtube.com",
    "www.youtube.com",
    "youtube-nocookie.com",
    "www.youtube-nocookie.com",
    "player.vimeo.com",
    "vimeo.com",
];

/** Build regex to strip dangerous tags and their content. */
const TAG_STRIP_REGEX = new RegExp(
    `<\\s*\\/?(${DANGEROUS_TAGS.join("|")})(\\s[^>]*)?>([\\s\\S]*?<\\s*\\/\\s*\\1\\s*>)?`,
    "gi",
);

/** Match all iframe tags for selective filtering. */
const IFRAME_REGEX = /<iframe\s[^>]*>/gi;
const IFRAME_SRC_REGEX = /src\s*=\s*["']([^"']+)["']/i;

/** Strip event handler attributes (on*="...") and javascript: hrefs. */
const EVENT_HANDLER_REGEX = /\s+on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi;
const JAVASCRIPT_HREF_REGEX = /\s+(href|src|action)\s*=\s*["']?\s*javascript:/gi;
const DATA_URI_REGEX = /\s+(href|src)\s*=\s*["']?\s*data:\s*text\/html/gi;

/**
 * Check if an iframe src URL points to a trusted embed domain.
 */
function isTrustedIframe(iframeTag: string): boolean {
    const srcMatch = iframeTag.match(IFRAME_SRC_REGEX);
    if (!srcMatch) return false;

    try {
        const url = new URL(srcMatch[1]);
        return TRUSTED_IFRAME_HOSTS.some(
            (host) => url.hostname === host || url.hostname.endsWith(`.${host}`),
        );
    } catch {
        return false;
    }
}

/**
 * Sanitize an HTML string by removing dangerous elements and attributes.
 * Preserves safe HTML like tables, images, headings, paragraphs, lists,
 * and iframes from trusted video embed domains.
 */
export function sanitizeHtml(html: string): string {
    if (!html) return "";

    let sanitized = html;

    // Remove dangerous tags and their content (not iframes — handled separately)
    for (let i = 0; i < 3; i++) {
        sanitized = sanitized.replace(TAG_STRIP_REGEX, "");
    }

    // Selectively strip untrusted iframes (keep YouTube/Vimeo)
    sanitized = sanitized.replace(IFRAME_REGEX, (match) => {
        return isTrustedIframe(match) ? match : "";
    });
    // Also strip closing tags for removed iframes
    sanitized = sanitized.replace(/<\/iframe>/gi, (match, offset) => {
        // Keep closing tag only if there's a preceding trusted iframe opening tag
        const before = sanitized.slice(0, offset);
        const lastOpen = before.lastIndexOf("<iframe");
        if (lastOpen === -1) return "";
        const openTag = before.slice(lastOpen).match(/<iframe\s[^>]*>/i);
        if (openTag && isTrustedIframe(openTag[0])) return match;
        return "";
    });

    // Remove event handler attributes
    sanitized = sanitized.replace(EVENT_HANDLER_REGEX, "");

    // Remove javascript: protocol in href/src/action
    sanitized = sanitized.replace(JAVASCRIPT_HREF_REGEX, ' $1=""');

    // Remove data:text/html URIs (XSS vector)
    sanitized = sanitized.replace(DATA_URI_REGEX, ' $1=""');

    return sanitized;
}
