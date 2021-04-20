export default function websiteFeatures(req, res) {
  res.status(200).json([
    {
      name: "security",
      text: "Secure SSL security",
    },
    {
      name: "services",
      text: "A full list of services",
    },
    {
      name: "cta",
      text: "Clear Call-To-Actions",
    },
    {
      name: "fast",
      text: "A fast loading website",
    },
    {
      name: "seo",
      text: "Effective on-page and off-page SEO",
    },
    {
      name: "expert",
      text: "A regular blog showcasing expertise",
    },
    {
      name: "clipboard",
      text: "A clear message for the website visitor",
    },
    {
      name: "eye",
      text: "Multiple case studies and testimonials",
    },
    {
      name: "computer",
      text: "A professional, well-designed appearance",
    },
    {
      name: "fire",
      text: "An effective online marketing campaign",
    },
    {
      name: "thumb",
      text: "Social media engagement and growth",
    },
    {
      name: "pie-chart",
      text: "Analyzing the data for improvement",
    },
  ]);
}
