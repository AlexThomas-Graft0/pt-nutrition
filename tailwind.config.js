module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-image": "url('/images/home-header2.jpg')", //opacity in ps is 40%
        "web-design-header-image":
          "url('/images/dentist-web-design-background.jpg')",
        "copy-writing-header-image":
          "url('/images/content-writing-background.jpg')",
        "online-ads-header-image": "url('/images/online-ads-background.jpg')",
        "seo-header-image": "url('/images/seo-background.jpg')",
        "smm-header-image": "url('/images/social-media-background.jpg')",
        "ppc-header-image": "url('/images/ppc-background.jpg')",
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
