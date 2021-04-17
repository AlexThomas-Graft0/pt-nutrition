module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-image": "url('/img/header-image.jpg')",
        "web-design-header-image":
          "url('/images/dentist-web-design-background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
