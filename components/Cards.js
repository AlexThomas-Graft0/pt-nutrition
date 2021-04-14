import Layout from "../components/Layout";
import Card from "./Card";

export default function Cards() {
  const cardData = [
    {
      link: "web-design",
      icon: "clipboard",
      title: "Websites which work",
      body:
        "We don't just create websites. We create websites that get results.",
      subtext: "Learn more about web design",
    },
    {
      link: "ppc-for-pt-nutrition",
      icon: "chart",
      title: "Google AdWords Click",
      body:
        "We aim to get you the best results and land you leads through targets ads.",
      subtext: "Learn more about AdWords",
    },
    {
      link: "seo-for-pt-nutrition",
      icon: "seo",
      title: "SEO",
      body:
        "Effective on-page and off-page SEO to get you ranking in top positions on Google.",
      subtext: "Learn more about web SEO",
    },
    {
      link: "content-marketing",
      icon: "services",
      title: "Content Writing",
      body: "Our writers are highly-skilled communicators and persuaders.",
      subtext: "Learn more about content writing",
    },
    {
      link: "online-advertising",
      icon: "cta",
      title: "Online Advertising",
      body: "Target the right person with the right message at the right time.",
      subtext: "Learn more about online ads",
    },
    {
      link: "social-media",
      icon: "user",
      title: "Social Media",
      body: "Social media growth to improve credability and gain new clients.",
      subtext: "Learn more about social media",
    },
  ];

  const cards = cardData.map((card, i) => {
    return <Card key={i} card={card} />;
  });

  return (
      <div className="flex flex-wrap items-center justify-between space-x-3 max-w-7xl mt-6 sm:w-full">
        {cards}
      </div>
  );
}
