import Card from "./Card";

export default function Cards({ cardData, classes }) {
  const cards = cardData.map((card, i) => {
    return <Card key={i} card={card} />;
  });

  return (
    <div
      className={`flex flex-wrap items-center justify-around w-screen md:mt-6 bg-gray-50 md:p-5 ${classes}`}
    >
      {cards}
    </div>
  );
}
