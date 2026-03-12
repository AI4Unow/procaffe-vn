/**
 * Lightweight HTML sanitizer for user-generated content.
 * Strips dangerous tags (script, iframe, object, embed, form, etc.)
 * and event handler attributes (onclick, onerror, onload, etc.)
 * to prevent stored XSS attacks.
 *
 * For production use with untrusted user input, consider upgrading
 * to DOMPurify when package installation is available.
 */

/** Tags that are always stripped (case-insensitive). */
const DANGEROUS_TAGS = [
    "script",
    "iframe",
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

/** Build regex to strip dangerous tags and their content. */
const TAG_STRIP_REGEX = new RegExp(
    `<\\s*\\/?(${DANGEROUS_TAGS.join("|")})(\\s[^>]*)?>([\\s\\S]*?<\\s*\\/\\s*\\1\\s*>)?`,
    "gi",
);

/** Strip event handler attributes (on*="...") and javascript: hrefs. */
const EVENT_HANDLER_REGEX = /\s+on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi;
const JAVASCRIPT_HREF_REGEX = /\s+(href|src|action)\s*=\s*["']?\s*javascript:/gi;
const DATA_URI_REGEX = /\s+(href|src)\s*=\s*["']?\s*data:\s*text\/html/gi;

/**
 * Sanitize an HTML string by removing dangerous elements and attributes.
 * Preserves safe HTML like tables, images, headings, paragraphs, lists, etc.
 */
export function sanitizeHtml(html: string): string {
    if (!html) return "";

    let sanitized = html;

    // Remove dangerous tags and their content
    // Run multiple passes to handle nested dangerous tags
    for (let i = 0; i < 3; i++) {
        sanitized = sanitized.replace(TAG_STRIP_REGEX, "");
    }

    // Remove event handler attributes
    sanitized = sanitized.replace(EVENT_HANDLER_REGEX, "");

    // Remove javascript: protocol in href/src/action
    sanitized = sanitized.replace(JAVASCRIPT_HREF_REGEX, " $1=\"\"");

    // Remove data:text/html URIs (XSS vector)
    sanitized = sanitized.replace(DATA_URI_REGEX, " $1=\"\"");

    return sanitized;
}
