export default function ppcFeatures(req, res) {
  res.status(200).json([
    {
      icon: "target",
      title: "The Right Visitors",
      body:
        "We work on only bringing you interested visitors to convert into paying clients.",
      // subtext: "",
    },
    {
      icon: "magnet",
      title: "Retargeting Ads",
      body:
        "Strategically bring back website visitors who didn't convert and acquire new clients at lower costs.",
      // subtext: "",
    },
    {
      icon: "pricetag",
      title: "Flat Pricing",
      body: "Our pricing is affotdable and manageable for your budget.",
      // subtext: "",
    },
    {
      icon: "copywriting",
      title: "Conversion Copywriting",
      body:
        "Our team is highly experienced in copywriting focused on conversions.",
      // subtext: "",
    },
    {
      icon: "reports",
      title: "Custom Reporting",
      body:
        "Easily view a summary of marketing stats that actually make sense.",
      // subtext: "",
    },
    {
      icon: "rocket",
      title: "Conversion Tools",
      body:
        "Analytics, Landing pages, surveys and more. We use advanced tools to grow your business.",
      // subtext: "",
    },
  ]);
}
