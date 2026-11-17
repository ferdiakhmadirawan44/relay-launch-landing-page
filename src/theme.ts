import { defineTheme } from "@hyper-elements/react";

// Relay's brand, written once: every element below inherits it.
// Accent: vivid violet. Ink: deep navy. Paper: warm off-white.
export const relayTheme = defineTheme({
  colors: {
    background: "#FAFAF8",
    foreground: "#0F172A",
    primary: "#5A4FE3",
    primaryForeground: "#FFFFFF",
    muted: "#64748B",
    border: "#E5E7EB",
    accentSoft: "#EEECFE",
    dark: "#0F172A",
    darkMuted: "#94A3B8",
  },
  fonts: {
    body: "Inter, -apple-system, 'Segoe UI', Arial, sans-serif",
    heading: "Inter, -apple-system, 'Segoe UI', Arial, sans-serif",
  },
  fontSizes: { body: 16 },
  lineHeights: { body: 1.6 },
  elements: {
    Heading: {
      by: {
        level: {
          1: { fontSize: 56, lineHeight: 1.08, fontWeight: 800, mobile: { fontSize: 36, lineHeight: 1.12 } },
          2: { fontSize: 36, lineHeight: 1.2, fontWeight: 800, mobile: { fontSize: 28 } },
          3: { fontSize: 20, lineHeight: 1.35, fontWeight: 700 },
        },
      },
    },
    Button: {
      borderRadius: 10,
      padding: [14, 28],
      fontWeight: 700,
      hover: { backgroundColor: "#4A41D1" },
      variants: {
        secondary: {
          backgroundColor: "#FFFFFF",
          color: "#0F172A",
          border: "1px solid #E5E7EB",
          hover: { backgroundColor: "#F1F5F9" },
        },
        light: {
          backgroundColor: "#FFFFFF",
          color: "#5A4FE3",
          hover: { backgroundColor: "#EEECFE" },
        },
      },
    },
  },
  styles: {
    card: {
      backgroundColor: "#FFFFFF",
      padding: 28,
      gap: 12,
      borderRadius: 16,
      border: "1px solid #E5E7EB",
    },
    pill: {
      backgroundColor: "#EEECFE",
      color: "#5A4FE3",
      padding: [8, 16],
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 700,
    },
  },
});
