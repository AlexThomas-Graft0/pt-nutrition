export default function seoFeatures(req, res) {
  res.status(200).json([
    {
      icon: "document-search",
      // icon: "crosshairaroundlist",
      title: "Keyword Analysis",
      body:
        "Investigating keyword searches that have the highest potential for converting into clients.",
      // subtext: "",
    },
    {
      icon: "code",
      // icon: "title-change",
      title: "Title Optimization",
      body: "Relevant use of title tags focused on ideal searches.",
      // subtext: "",
    },
    {
      icon: "fire",
      // icon: "keyword-url",
      title: "Keyword-Rich URLs",
      body: "Optimizing of the URL website structure.",
      // subtext: "",
    },
    {
      icon: "pencil",
      // icon: "conversion-copy-writing",
      title: "SEO Content Writing",
      body: "Targeted SEO content creation for Google to understand better.",
      // subtext: "",
    },
    {
      icon: "link",
      // icon: "internal-links",
      title: "Internal Linking",
      body:
        "Search engines look for roadmaps in your website which is provided by an effective inter-linking structure.",
      // subtext: "",
    },
    {
      icon: "pie-chart",
      // icon: "link-building",
      title: "Link Building",
      body:
        "Strategic links to your PT & Nutrtionist business will help it rank on Google.",
      // subtext: "",
    },
    {
      icon: "seo",
      // icon: "local-seo",
      title: "Local SEO",
      body:
        "Rank in Google Maps, Google Business, local listings and other effective platforms.",
      // subtext: "",
    },
    {
      icon: "newspaper",
      // icon: "press-release",
      title: "Press Releases",
      body:
        " Press releases assist with brand awareness, promotions and link building.",
      // subtext: "",
    },
  ]);
}
