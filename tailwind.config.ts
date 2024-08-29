import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
        desertsand: "#DAB295",
        linen: "#F4E9E1",
        whitesmoke: "#F7F4F3",
        denim: "#2D60B4",
        cambridgeblue: "#6AA083",
        mintcream: "#DAE7E0",
        darkgreen: "#203128",

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ['var(--font-inter)'],
        agrandir: ['var(--font-agrandir)'],
      },
      lineHeight: {
        'hang-lose': '0.75',
      }

    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
