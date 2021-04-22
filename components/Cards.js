import Card from "./Card";

export default function Cards({ cardData, classes }) {
  const cards = cardData.map((card, i) => {
    return <Card key={i} card={card} />;
  });

  return (
    <div
      className={`flex flex-wrap items-center justify-around max-w-7xl sm:w-full ${classes}`}
    >
      {cards}
    </div>
  );
}
