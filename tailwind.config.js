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
            navy: "#5EAD4C",
            blue: "#5EAD4C",
            violet: "#5EAD4C",
            bg: "#FFFFFF",
            text: "#5EAD4C",
            muted: "#BDBDBD",
            line: "#BDBDBD",
            success: "#5EAD4C",
            warn: "#BDBDBD",
          },
        },
        boxShadow: {
          soft: "0 10px 30px rgba(94, 173, 76, 0.22)",
        },
      },
    },
    plugins: [],
  };
  