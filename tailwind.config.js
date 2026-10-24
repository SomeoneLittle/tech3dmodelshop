/* Токены макета Stitch (Obsidian Cybernetic Studio). Цвета, зависящие от темы, берутся из CSS-переменных --c-* (см. css/input.css). */
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
        "secondary": "#4dddb6",
        "on-secondary-fixed-variant": "#00513f",
        "on-tertiary": "#273331",
        "surface-container-high": "#282a2b",
        "inverse-primary": "#006c52",
        "surface-container-low": "#1a1c1d",
        "inverse-surface": "#e2e2e3",
        "tertiary": "#cedbd7",
        "surface-container-highest": "#333536",
        "on-error-container": "#ffdad6",
        "on-secondary-container": "#004031",
        "secondary-fixed-dim": "#4dddb6",
        "on-primary": "#003829",
        "surface-container-lowest": "#0c0e0f",
        "error": "#ffb4ab",
        "on-primary-fixed-variant": "#00513d",
        "primary": "rgb(var(--c-primary) / <alpha-value>)",
        "on-tertiary-fixed-variant": "#3d4947",
        "tertiary-fixed": "#d8e5e2",
        "on-tertiary-fixed": "#121e1c",
        "on-primary-fixed": "#002117",
        "surface-variant": "#333536",
        "tertiary-container": "#b2bfbc",
        "on-primary-container": "#005742",
        "on-surface": "rgb(var(--c-on-surface) / <alpha-value>)",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-background": "#e2e2e3",
        "surface": "rgb(var(--c-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--c-on-surface-variant) / <alpha-value>)",
        "on-tertiary-container": "#424e4c",
        "surface-dim": "rgb(var(--c-surface-dim) / <alpha-value>)",
        "on-secondary": "#00382b",
        "outline-variant": "rgb(var(--c-outline-variant) / <alpha-value>)",
        "background": "rgb(var(--c-background) / <alpha-value>)",
        "primary-container": "#2dd4a7",
        "inverse-on-surface": "#2f3132",
        "surface-tint": "rgb(var(--c-surface-tint) / <alpha-value>)",
        "primary-fixed": "#63fccc",
        "surface-bright": "#38393a",
        "secondary-fixed": "#6ffad2",
        "secondary-container": "#00b691",
        "primary-fixed-dim": "#3edeb1",
        "tertiary-fixed-dim": "#bcc9c6",
        "outline": "#85948d",
        "on-secondary-fixed": "#002118",
        "primary-neon": "rgb(var(--c-primary) / <alpha-value>)"
      }
    }
  }
};
