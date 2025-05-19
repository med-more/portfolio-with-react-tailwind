/** @type {import('tailwindcss').Config} */
// Using try-catch to handle cases where shadcn config isn't available
let defaultConfig = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

try {
  // Attempt to load shadcn config with correct package name
  defaultConfig = require("@shadcn/ui/tailwind.config");
} catch (e) {
  console.warn("Could not load @shadcn/ui/tailwind.config - using default configuration");
}

module.exports = {
  ...defaultConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    // Include shadcn components if using them
    "../../node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme?.extend,
      colors: {
        ...defaultConfig.theme?.extend?.colors,
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    ...(defaultConfig.plugins || []),
    require("tailwindcss-animate"),
  ],
};