/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        fg: {
          DEFAULT: "var(--color-fg)",
          muted: "var(--color-fg-muted)",
          subtle: "var(--color-fg-subtle)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          hero: "var(--color-surface-hero)",
          card: "var(--color-surface-card)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          secondary: "var(--color-accent-secondary)",
        },
        "on-accent": "var(--color-on-accent)",
        section: {
          contact: "var(--color-section-contact)",
        },
        success: "var(--color-success)",
        error: "var(--color-error)",
        "ui-muted": "var(--color-ui-muted)",
        forest: "var(--color-forest)",
        wine: "var(--color-wine)",
        petrol: "var(--color-petrol)",
        plum: "var(--color-plum)",
        "ink-indigo": "var(--color-indigo)",
        terracotta: "var(--color-terracotta)",
        caramel: "var(--color-caramel)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
