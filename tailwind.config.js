/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          firo: {
            navy: "#0F172A",
            blue: "#3B82F6",
            violet: "#8B5CF6",
            bg: "#EEF4FF",
            text: "#1E293B",
            muted: "#64748B",
            line: "#D8E3F8",
            success: "#10B981",
            warn: "#F59E0B",
          },
        },
        boxShadow: {
          soft: "0 10px 30px rgba(2, 6, 23, 0.10)",
        },
      },
    },
    plugins: [],
  };
  