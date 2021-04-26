module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "index-header-image": "url('/images/home-header.jpg')",
        "blog-header-image": "url('/images/blog-header.jpg')",
        "about-header-image": "url('/images/about-header.jpg')",
        "marketing-header-image": "url('/images/marketing-header.jpg')",
        "contact-header-image": "url('/images/contact-header.jpg')",
        "web-design-header-image": "url('/images/web-design-header.jpg')",
        "copy-writing-header-image": "url('/images/copy-writing-header.jpg')",
        "ads-header-image": "url('/images/ads-header.jpg')",
        "seo-header-image": "url('/images/seo-header.jpg')",
        "smm-header-image": "url('/images/social-media-header.jpg')",
        "ppc-header-image": "url('/images/ppc-header.jpg')",
        "ppc-laptop": "url('/images/ppc-laptop.png')",
        "ppc-ab-testing": "url('/images/ppc-laptop-ab-testing.png')",
        "ppc-management": "url('/images/ppc-management.png')",
        "portfolio-header-image": "url('/images/portfolio_header.jpg')",
        "smm-spider-diag": "url('/images/smm-spider-diagram.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
