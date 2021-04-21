import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Link from "next/link";
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
  });

  return (
    <div>
      <Layout
        title="Marketing"
        banner={
          <div className="h-96 bg-header-image bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-5xl font-bold w-1/3">
              Do you want to grow your PT or Nutrition Business?
            </h1>
            <div className="mt-3 text-2xl w-1/2">
              With industry knowledge and the benefit of specialising in
              websites for PTs and Nutritions, we know exactly what works and
              how to grow your business.
            </div>
          </div>
        }
      >
        <div>
          <div className="text-3xl text-center justify-center font-bold m-5 ">
            Online Marketing Solutions for PTs &amp; Nutritionists
          </div>
          <div className="text-xl ">
            Finding the right marketing company among the multitude of choices
            available is not easy. For this reason we specialize in PTs and
            Nutrition Businesses. We aquire clients through effective online
            marketing and development. We provide the following services:
          </div>
        </div>
        <Cards cardData={features} />
        <div className="text-xl text-center justify-center font-bold m-10">
          Scenario #1: You Already Have A Website
        </div>
        <div className="text-xl ">
          If you already have a website, was is just created by an
          individual/company who creates websites that they thought may look
          good or does it actually work? Does it send the right message across
          to a potential clients about what they are looking for? Does it
          fulfill your business objective of getting more patients?
        </div>
        <div className="text-xl text-center justify-center font-bold m-10">
          Scenario #2: You Don't Have A Website Yet
        </div>
        <div className="text-xl text-center justify-center mb-5">
          If you don't currently have a website, it's extremely important to
          have one in this competitive market. All credible Pts &amp;
          Nutrtionists have effective websites that showcase their expertise and
          experience and it results in more clients and higher profits.
        </div>
        <FreeAnalysisBanner />
        <BannerBottom />
      </Layout>
    </div>
  );
}
