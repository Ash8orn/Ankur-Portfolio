/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05070a",
          900: "#080b11",
          875: "#0b0f17",
          850: "#0d131c",
          800: "#111927",
          750: "#152033",
          700: "#1b2536",
          border: "#1e293b",
        },
        accent: {
          DEFAULT: "#10b981",
          emerald: "#10b981",
          cyan: "#22d3ee",
          soft: "#34d399",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #10b981 0%, #22d3ee 100%)",
        "grid-faint":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-pan": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(560%)" },
        },
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 6px 1px rgba(16,185,129,0.5)",
          },
          "20%": {
            transform: "scale(1.5)",
            boxShadow: "0 0 22px 8px rgba(16,185,129,0.95)",
          },
          "40%": {
            transform: "scale(1)",
            boxShadow: "0 0 6px 1px rgba(16,185,129,0.5)",
          },
          "55%": {
            transform: "scale(1.3)",
            boxShadow: "0 0 16px 5px rgba(16,185,129,0.85)",
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 6px 1px rgba(16,185,129,0.5)",
          },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        float: "float 7s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out both",
        "gradient-pan": "gradient-pan 6s ease infinite",
        scan: "scan 3.5s ease-in-out infinite",
        heartbeat: "heartbeat 1.6s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 45px -12px rgba(16,185,129,0.45)",
        "glow-cyan": "0 0 45px -12px rgba(34,211,238,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
