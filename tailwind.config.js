/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-indigo-600",
    "hover:bg-indigo-700",
    "text-white",
    "px-6",
    "py-3",
    "rounded-lg",
    "flex",
    "items-center",
    "gap-2",
    "transition-all",
    "duration-200",
    "shadow-lg",
    "hover:shadow-xl",
    "transform",
    "hover:scale-105",
  ],
};
