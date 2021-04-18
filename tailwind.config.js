module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-image": "url('/img/header-image.jpg')",
        "web-design-header-image":
          "url('/images/dentist-web-design-background.jpg')",
        "copy-writing-header-image":
          "url('/images/content-writing-background.jpg')",
        "ppc-laptop": "url('/images/ppc-laptop.png')",
        "ppc-ab-testing": "url('/images/ppc-laptop-ab-testing.png')",
        "ppc-management": "url('/images/ppc-management.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
