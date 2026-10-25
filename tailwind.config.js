/* Токены макета Stitch (Obsidian Cybernetic Studio). Цвета-токены читаются из CSS-переменных --c-* (см. css/input.css, блок THEMES). */
module.exports = {
  "darkMode": "class",
  "content": [
    "./*.html",
    "./js/*.js"
  ],
  "theme": {
    "extend": {
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "space-lg": "1.5rem",
        "gutter-mobile": "0.75rem",
        "space-xs": "0.25rem",
        "margin-tablet": "1.5rem",
        "space-2xl": "4rem",
        "margin-mobile": "1rem",
        "margin": "3rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-xl": "2.5rem",
        "gutter": "1.5rem"
      },
      "fontFamily": {
        "body-sm": [
          "Inter"
        ],
        "body-lg": [
          "Inter"
        ],
        "code-tech": [
          "Space Grotesk"
        ],
        "headline-xl-mobile": [
          "Space Grotesk"
        ],
        "headline-xl": [
          "Space Grotesk"
        ],
        "body-md": [
          "Inter"
        ],
        "headline-md": [
          "Space Grotesk"
        ],
        "label-md": [
          "Space Grotesk"
        ],
        "headline-sm": [
          "Space Grotesk"
        ],
        "headline-lg": [
          "Space Grotesk"
        ],
        "display-lg": [
          "Space Grotesk"
        ],
        "label-sm": [
          "Space Grotesk"
        ],
        "display-lg-mobile": [
          "Space Grotesk"
        ]
      },
      "fontSize": {
        "body-sm": [
          "12px",
          {
            "lineHeight": "18px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "body-lg": [
          "16px",
          {
            "lineHeight": "26px",
            "letterSpacing": "-0.01em",
            "fontWeight": "400"
          }
        ],
        "code-tech": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.02em",
            "fontWeight": "500"
          }
        ],
        "headline-xl-mobile": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "headline-xl": [
          "40px",
          {
            "lineHeight": "48px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "14px",
          {
            "lineHeight": "22px",
            "letterSpacing": "-0.005em",
            "fontWeight": "400"
          }
        ],
        "headline-md": [
          "22px",
          {
            "lineHeight": "30px",
            "letterSpacing": "-0.01em",
            "fontWeight": "500"
          }
        ],
        "label-md": [
          "13px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.04em",
            "fontWeight": "600"
          }
        ],
        "headline-sm": [
          "18px",
          {
            "lineHeight": "26px",
            "letterSpacing": "0em",
            "fontWeight": "500"
          }
        ],
        "headline-lg": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.015em",
            "fontWeight": "600"
          }
        ],
        "display-lg": [
          "56px",
          {
            "lineHeight": "64px",
            "letterSpacing": "-0.03em",
            "fontWeight": "700"
          }
        ],
        "label-sm": [
          "11px",
          {
            "lineHeight": "14px",
            "letterSpacing": "0.06em",
            "fontWeight": "500"
          }
        ],
        "display-lg-mobile": [
          "36px",
          {
            "lineHeight": "44px",
            "letterSpacing": "-0.02em",
            "fontWeight": "700"
          }
        ]
      },
      "colors": {
        "surface-container": "#1e2021",
        "secondary": "rgb(var(--c-secondary) / <alpha-value>)",
        "on-secondary-fixed-variant": "rgb(var(--c-on-secondary-fixed-variant) / <alpha-value>)",
        "on-tertiary": "rgb(var(--c-on-tertiary) / <alpha-value>)",
        "surface-container-high": "#282a2b",
        "inverse-primary": "rgb(var(--c-inverse-primary) / <alpha-value>)",
        "surface-container-low": "#1a1c1d",
        "inverse-surface": "#e2e2e3",
        "tertiary": "rgb(var(--c-tertiary) / <alpha-value>)",
        "surface-container-highest": "#333536",
        "on-error-container": "#ffdad6",
        "on-secondary-container": "rgb(var(--c-on-secondary-container) / <alpha-value>)",
        "secondary-fixed-dim": "rgb(var(--c-secondary-fixed-dim) / <alpha-value>)",
        "on-primary": "rgb(var(--c-on-primary) / <alpha-value>)",
        "surface-container-lowest": "#0c0e0f",
        "error": "#ffb4ab",
        "on-primary-fixed-variant": "rgb(var(--c-on-primary-fixed-variant) / <alpha-value>)",
        "primary": "rgb(var(--c-primary) / <alpha-value>)",
        "on-tertiary-fixed-variant": "rgb(var(--c-on-tertiary-fixed-variant) / <alpha-value>)",
        "tertiary-fixed": "#d8e5e2",
        "on-tertiary-fixed": "rgb(var(--c-on-tertiary-fixed) / <alpha-value>)",
        "on-primary-fixed": "rgb(var(--c-on-primary-fixed) / <alpha-value>)",
        "surface-variant": "#333536",
        "tertiary-container": "rgb(var(--c-tertiary-container) / <alpha-value>)",
        "on-primary-container": "rgb(var(--c-on-primary-container) / <alpha-value>)",
        "on-surface": "rgb(var(--c-on-surface) / <alpha-value>)",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-background": "#e2e2e3",
        "surface": "rgb(var(--c-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--c-on-surface-variant) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--c-on-tertiary-container) / <alpha-value>)",
        "surface-dim": "rgb(var(--c-surface-dim) / <alpha-value>)",
        "on-secondary": "rgb(var(--c-on-secondary) / <alpha-value>)",
        "outline-variant": "rgb(var(--c-outline-variant) / <alpha-value>)",
        "background": "rgb(var(--c-background) / <alpha-value>)",
        "primary-container": "rgb(var(--c-primary-container) / <alpha-value>)",
        "inverse-on-surface": "#2f3132",
        "surface-tint": "rgb(var(--c-surface-tint) / <alpha-value>)",
        "primary-fixed": "rgb(var(--c-primary-fixed) / <alpha-value>)",
        "surface-bright": "#38393a",
        "secondary-fixed": "rgb(var(--c-secondary-fixed) / <alpha-value>)",
        "secondary-container": "rgb(var(--c-secondary-container) / <alpha-value>)",
        "primary-fixed-dim": "rgb(var(--c-primary-fixed-dim) / <alpha-value>)",
        "tertiary-fixed-dim": "rgb(var(--c-tertiary-fixed-dim) / <alpha-value>)",
        "outline": "#85948d",
        "on-secondary-fixed": "rgb(var(--c-on-secondary-fixed) / <alpha-value>)",
        "primary-neon": "rgb(var(--c-primary) / <alpha-value>)",
        "g2dd4a7": "rgb(var(--g-2dd4a7) / <alpha-value>)",
        "g293630": "rgb(var(--g-293630) / <alpha-value>)",
        "g002117": "rgb(var(--g-002117) / <alpha-value>)",
        "g56f1c2": "rgb(var(--g-56f1c2) / <alpha-value>)",
        "g9eb1aa": "rgb(var(--g-9eb1aa) / <alpha-value>)",
        "g00b691": "rgb(var(--g-00b691) / <alpha-value>)",
        "g172421": "rgb(var(--g-172421) / <alpha-value>)",
        "g4dddb6": "rgb(var(--g-4dddb6) / <alpha-value>)"
      }
    }
  }
};
