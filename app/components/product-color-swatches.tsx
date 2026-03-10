"use client";

/**
 * Product color swatches — extracts color variants from product title/content
 * and displays clickable color dots on the product detail page.
 */

/** Known color map: Vietnamese/English color names → hex values */
const COLOR_MAP: Record<string, string> = {
    // Vietnamese color names
    "đen": "#1a1a1a",
    "trắng": "#f5f5f5",
    "bạc": "#c0c0c0",
    "đỏ": "#c0392b",
    "xanh": "#2980b9",
    "xám": "#7f8c8d",
    "vàng": "#f1c40f",
    "nâu": "#8b4513",
    "hồng": "#e91e8c",
    "cam": "#e67e22",
    "tím": "#8e44ad",
    "xanh lá": "#27ae60",
    "xanh dương": "#2980b9",
    "kem": "#fdf5e6",
    "inox": "#b4b4b4",
    // English color names commonly used in Vietnamese product listings
    "black": "#1a1a1a",
    "white": "#f5f5f5",
    "silver": "#c0c0c0",
    "red": "#c0392b",
    "blue": "#2980b9",
    "grey": "#7f8c8d",
    "gray": "#7f8c8d",
    "chrome": "#d4d4d4",
    "titanium": "#878681",
    "stainless": "#b4b4b4",
    "steel": "#b4b4b4",
    "matte black": "#2c2c2c",
    "midnight blue": "#191970",
    "dark grey": "#555555",
};

/** Extract colors from product title + content */
export function extractProductColors(title: string, content: string): { name: string; hex: string }[] {
    const text = `${title} ${content}`.toLowerCase();
    const found: { name: string; hex: string }[] = [];
    const seen = new Set<string>();

    for (const [colorName, hex] of Object.entries(COLOR_MAP)) {
        if (text.includes(colorName) && !seen.has(hex)) {
            seen.add(hex);
            found.push({ name: colorName, hex });
        }
    }

    return found.slice(0, 6); // max 6 swatches
}

interface ProductColorSwatchesProps {
    title: string;
    content: string;
}

export default function ProductColorSwatches({ title, content }: ProductColorSwatchesProps) {
    const colors = extractProductColors(title, content);

    if (colors.length < 2) return null; // Only show if multiple colors found

    return (
        <div className="product-color-swatches">
            <span className="color-swatch-label">Màu sắc:</span>
            <div className="color-swatch-row">
                {colors.map((color) => (
                    <span
                        key={color.hex}
                        className="color-swatch"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                    />
                ))}
            </div>
        </div>
    );
}
