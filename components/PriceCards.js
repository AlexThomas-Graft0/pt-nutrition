export default function PriceCards() {
  const packages = [
    {
      name: "Marketing Package",
      features: [
        "Advanced SEO",
        "Adwords Management & Reporting",
        "Online Ads Management & Reporting",
        "Monthly ROI Assesment",
        "1 Detailed Blog Article Every Week (3,000 words on average)",
      ],
      price: "£1000",
      pricePer: "p/m",
    },
    {
      name: "Premium Package (most common)",
      features: [
        "Advanced SEO",
        "Adwords Management & Reporting",
        "Online Ads Management & Reporting",
        "Ongoing Website support",
        "Daily Social Media Management",
        "Landing Page Optimisation",
        "Monthly ROI Assesment",
        "1 Detailed Blog Article Every Week (3,000 words on average)",
      ],
      price: "£1500",
      pricePer: "p/m",
    },
    {
      name: "Full Package (recommended)",
      features: [
        "Conversion-Centered Website Design",
        "Advanced SEO",
        "Adwords Management & Reporting",
        "Online Ads Management & Reporting",
        "Ongoing Website support",
        "Daily Social Media Management",
        "Landing Page Optimisation",
        "Monthly ROI Assesment",
        "1 Detailed Blog Article Every Week (3,000 words on average)",
      ],
      price: "£2000",
      pricePer: "p/m",
    },
  ].map((card, i) => {
    return (
      <div
        key={i}
        className={`${
          i == 1
            ? "z-10 flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-lg shadow-lg lg:w-1/3 lg:mx-0 sm:-mt-6"
            : ""
        } flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-none lg:w-1/4 lg:mx-0 lg:rounded-l-lg`}
      >
        <div className="flex-1 overflow-hidden text-gray-600 bg-white rounded-t rounded-b-none shadow">
          <div className="p-8 text-3xl font-bold text-center border-b-4">
            {card.name}
          </div>
          <ul className="w-full text-center">
            {card.features.map((feature, j) => (
              <li key={j} className="py-4 border-b">
                {feature}
                {/* Thing {(j += 1)} */}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
          <div className="w-full pt-6 text-3xl font-bold text-center text-gray-600">
            {card.price}
            <span className="text-base"> {card.pricePer}</span>
            <div className="text-xs">No once-off or hidden fees.</div>
          </div>
          <div className="flex items-center justify-center">
            <button className="px-8 py-4 mx-auto my-6 font-bold text-gray-800 transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline hover:scale-105">
              Start
            </button>
          </div>
        </div>
      </div>
    );
  });

  const a = () => (
    <div className="z-10 flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-lg shadow-lg lg:w-1/3 lg:mx-0 sm:-mt-6">
      <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
        <div className="w-full p-8 text-3xl font-bold text-center">Basic</div>
        <div className="w-full h-1 py-0 my-0 rounded-t gradient"></div>
        <ul className="w-full text-base font-bold text-center">
          <li className="py-4 border-b">Thing</li>
          <li className="py-4 border-b">Thing</li>
          <li className="py-4 border-b">Thing</li>
          <li className="py-4 border-b">Thing</li>
        </ul>
      </div>
      <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
        <div className="w-full pt-6 text-4xl font-bold text-center">
          £x.99
          <span className="text-base">/ per user</span>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-8 py-4 mx-auto my-6 font-bold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-8 bg-gray-100">
      <div className="container px-2 pt-4 pb-12 mx-auto text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Pricing
        </h1>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>
        <div className="flex flex-col justify-center pt-12 my-12 sm:flex-row sm:my-4">
          {packages}
        </div>
      </div>
    </section>
  );
}
