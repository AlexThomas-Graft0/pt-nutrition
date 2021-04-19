export default function seoFeatures(req, res) {
  res.status(200).json([
    {
      link: "web-design",
      icon: "clipboard",
      title: "Websites which work",
      body:
        "We don't just create websites. We create websites that get results.",
      subtext: "Learn more about web design",
    },
    {
      link: "PPC",
      icon: "pie-chart",
      title: "Google AdWords Click",
      body:
        "We aim to get you the best results and land you leads through targets ads.",
      subtext: "Learn more about AdWords",
    },
    {
      link: "SEO",
      icon: "seo",
      title: "SEO",
      body:
        "Effective on-page and off-page SEO to get you ranking in top positions on Google.",
      subtext: "Learn more about web SEO",
    },
    {
      link: "copy-writing",
      icon: "book",
      title: "Copy Writing",
      body: "Our writers are highly-skilled communicators and persuaders.",
      subtext: "Learn more about copy writing",
    },
    {
      link: "Ads",
      icon: "eye",
      title: "Online Advertising",
      body: "Target the right person with the right message at the right time.",
      subtext: "Learn more about online ads",
    },
    {
      link: "SMM",
      icon: "user",
      title: "Social Media",
      body: "Social media growth to improve credability and gain new clients.",
      subtext: "Learn more about social media",
    },
  ]);
}
