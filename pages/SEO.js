import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import FreeAnalysis from "../components/FreeAnalysis";
export default function SEO() {
  const [features, setFeatures] = useState([]);
  async function fetchFeatures() {
    const res = await fetch(`/api/seoFeatures`);
    const seoFeatures = await res.json();
    setFeatures(seoFeatures);
  }
  useEffect(() => {
    fetchFeatures();
  }, []);

  return (
    <>
      <Layout
        title="SEO"
        banner={
          <div className="h-96 bg-seo-header-image bg-cover bg-center flex flex-col justify-center items-center text-gray-800 text-center">
            <h1 className="text-5xl font-bold w-1/3">SEO</h1>
            <div className="text-2xl font-semibold">
              For PTs &amp; Nutritionalists.
            </div>
          </div>
        }
      >
        <div className="flex flex-col md:flex-row w-full">
          <Image src="/images/ptseo.PNG" width={761} height={944} />
          <div className="container p-5 text-center flex flex-col space-y-5 justify-center items-center md:w-1/2 text-xl">
            <h2 className="text-3xl font-bold my-2 p-3">What is SEO?</h2>
            <h3 className="text-2xl font-semibold">
              SEO. Search Engine Optimization.
            </h3>
            <div>
              Being in the top 3 positions on Google can often mean the
              difference between an overbooked PT &amp; Nutrtionist business and
              one that is struggling to get more clients.
            </div>
            <div>
              Through long-term SEO strategies and proven results, we help PT
              &amp; Nutrtionists rank higher on Google to get more clients.
            </div>
            <div>
              SEO is not only limited to the common searches like "PT &amp;
              Nutrtionist in Cardiff".
            </div>
            <h3 className="text-2xl font-semibold">
              Overlooked SEO terms to rank for are:
            </h3>
            <div className="w-full">
              <ul className="list-none list-inside m-2">
                <li>"Fat Loss"</li>
                <li>"Gender Specific PT"</li>
                <li>"Healthy Diet"</li>
                <li>"Toning Diet"</li>
                <li>and many others</li>
              </ul>
            </div>
            <div>
              Effective SEO can result in a significant increase in clients
              which means higher profits for the PT &amp; Nutrtionist partners.
            </div>
            <h3 className="text-2xl font-semibold">The Importance of SEO</h3>
            <div className="my-2 antialiased tracking-wide">
              To understand the potential of SEO, if your PT &amp; Nutrtion
              business ranks in the top 3 positions for "personal trainers
              Cardiff" which receives over 200+ searches per month, your
              business could easily receive a minimum of 2-3 clients every
              month.
            </div>
            <div className="my-2 antialiased tracking-wide">
              Even if we work on a small amount of £100 for a 1:1, 1 hour
              session x 5 clients = £500 per week, £2,000 per month or £24,000
              extra per annum.
            </div>
            <div className="my-2 antialiased tracking-wide">
              It's important to note that this is a minor example. Effective SEO
              bundled with various marketing strategies can yield significantly
              higher returns.
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl px-3 font-semibold text-center mt-3">
            How We Grow Your business With SEO:
          </h3>
          <Cards cardData={features} classes="max-w-9xl" />
          <div className="w-full flex flex-col md:flex-row justify-around items-center mt-3">
            <ContactForm />
            <FreeAnalysis />
          </div>
        </div>
      </Layout>
    </>
  );
}
