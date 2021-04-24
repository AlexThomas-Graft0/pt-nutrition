import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import BannerBottom from "../components/BannerBottom";
import FreeAnalysisBanner from "../components/FreeAnalysisBanner";

export default function Marketing() {
  const [features, setFeatures] = useState([]);
  async function fetchFeatures() {
    const res = await fetch(`/api/homeFeatures`);
    const websiteFeatures = await res.json();
    setFeatures(websiteFeatures);
  }
  useEffect(() => {
    fetchFeatures();
  }, []);

  return (
    <div>
      <Layout
        title="Marketing"
        banner={
          <div className="h-96 bg-marketing-header-image bg-cover bg-center flex flex-col justify-center items-center text-gray-800 text-center">
            <h1 className="text-4xl md:text-5xl font-bold md:w-1/3">
              Online Marketing Solutions for PTs & Nutritionists
            </h1>
          </div>
        }
      >
        <div className="px-3">
          <div className="text-xl mt-3 text-center">
            Finding the right marketing company among the multitude of choices
            available is not easy. For this reason we specialize in PTs and
            Nutrition Businesses. We aquire clients through effective online
            marketing and development. We provide the following services:
          </div>
        </div>
        <Cards cardData={features} />
        {/* scenarios */}
        <div className="p-3 my-3">
          <div className="my-3">
            <h2 className="text-xl text-center font-bold">
              Scenario #1: You Already Have A Website
            </h2>
            <div className="md:text-xl">
              If you already have a website, was is just created by an
              individual/company who creates websites that they thought may look
              good or does it actually work? Does it send the right message
              across to a potential clients about what they are looking for?
              Does it fulfill your business objective of getting more patients?
            </div>
          </div>
          <div className="my-3">
            <h2 className="text-xl text-center font-bold">
              Scenario #2: You Don't Have A Website Yet
            </h2>
            <div className="md:text-xl">
              If you don't currently have a website, it's extremely important to
              have one in this competitive market. All credible Pts &amp;
              Nutrtionists have effective websites that showcase their expertise
              and experience and it results in more clients and higher profits.
            </div>
          </div>
        </div>
        {/* scenarios */}
        <FreeAnalysisBanner />
        <BannerBottom />
      </Layout>
    </div>
  );
}
