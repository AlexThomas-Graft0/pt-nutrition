export default function copywritingFeatures(req, res) {
  res.status(200).json([
    {
      icon: "security",
      // icon: "authority",
      title: "Shows Authority",
      body:
        "Professionals share what they know. It's no different for Pts or Nutritionists.",
      // subtext: "",
    },
    {
      icon: "security",
      // icon: "credibility",
      title: "Shows Credibility",
      body: `Credibility positions you as the "go-to" PT or Nutrtionist clients want to see.`,
      // subtext: "",
    },
    {
      icon: "security",
      // icon: "seo-graph",
      title: "Improves SEO",
      body:
        "Content writing helps boost important SEO terms to rank higher in Google.",
      // subtext: "",
    },
    {
      icon: "security",
      // icon: "trust",
      title: "Relays Trust",
      body:
        "Trust is earned. To earn trust, content writing is the key. This results in long-term clients.",
      // subtext: "",
    },
    {
      icon: "security",
      // icon: "groupofpeople",
      title: "Converts Visitors Into Clients",
      body:
        "Website visitors turn into patients after understanding your business and trusting your expertise.",
      // subtext: "",
    },
    {
      icon: "security",
      // icon: "education",
      title: "Educates the Clients",
      body:
        "A simple understanding of the process and your expertise goes a long way for client satisfaction.",
      // subtext: "",
    },
  ]);
}
