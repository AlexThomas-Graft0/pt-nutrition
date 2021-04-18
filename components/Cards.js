import Layout from "../components/Layout";
import Card from "./Card";

export default function Cards({ cardData, classes }) {
  // const cardData = [
  //   {
  //     link: "web-design",
  //     icon: "clipboard",
  //     title: "Websites which work",
  //     body:
  //       "We don't just create websites. We create websites that get results.",
  //     subtext: "Learn more about web design",
  //   },
  //   {
  //     link: "PPC",
  //     icon: "chart",
  //     title: "Google AdWords Click",
  //     body:
  //       "We aim to get you the best results and land you leads through targets ads.",
  //     subtext: "Learn more about AdWords",
  //   },
  //   {
  //     link: "SEO",
  //     icon: "seo",
  //     title: "SEO",
  //     body:
  //       "Effective on-page and off-page SEO to get you ranking in top positions on Google.",
  //     subtext: "Learn more about web SEO",
  //   },
  //   {
  //     link: "content-marketing",
  //     icon: "services",
  //     title: "Content Writing",
  //     body: "Our writers are highly-skilled communicators and persuaders.",
  //     subtext: "Learn more about content writing",
  //   },
  //   {
  //     link: "Ads",
  //     icon: "chart",
  //     title: "Online Advertising",
  //     body: "Target the right person with the right message at the right time.",
  //     subtext: "Learn more about online ads",
  //   },
  //   {
  //     link: "SMM",
  //     icon: "user",
  //     title: "Social Media",
  //     body: "Social media growth to improve credability and gain new clients.",
  //     subtext: "Learn more about social media",
  //   },
  // ];

  const cards = cardData.map((card, i) => {
    return <Card key={i} card={card} />;
  });

  return (
    <div
      className={`flex flex-wrap items-center justify-around max-w-7xl mt-6 sm:w-full ${classes}`}
    >
      {cards}
    </div>
  );
}
