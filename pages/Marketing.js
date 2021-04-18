import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Link from "next/link";

export default function Marketing() {
  const [features, setFeatures] = useState([]);
  async function fetchFeatures() {
    const res = await fetch(`http://localhost:3000/api/homeFeatures`);
    const websiteFeatures = await res.json();
    setFeatures(websiteFeatures);
  }
  useEffect(() => {
    fetchFeatures();
  });

  return (
    <Layout title="Marketing">
      <div>
        <div className="text-3xl font-bold m-5 ">
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
      <div className="text-xl  font-bold m-10">
        Scenario #1: You Already Have A Website
      </div>
      <div className="text-xl ">
        If you already have a website, was is just created by an
        individual/company who creates websites that they thought may look good
        or does it actually work? Does it send the right message across to a
        potential clients about what they are looking for? Does it fulfill your
        business objective of getting more patients?
      </div>
      <div className="text-xl text-center justify-center font-bold m-10">
        Scenario #2: You Don't Have A Website Yet
      </div>
      <div className="text-xl text-center justify-center mb-5">
        If you don't currently have a website, it's extremely important to have
        one in this competitive market. All credible Pts &amp; Nutrtionists have
        effective websites that showcase their expertise and experience and it
        results in more clients and higher profits.
      </div>
      <div className="flex flex-col justify-center items-center px-3 py-5 my-3 space-y-5 bg-green-500 w-full text-white">
        <div className="text-3xl">
          Get A Free Marketing Analysis Of Your Website
        </div>
        <div className="text-xl">
          Our team will go through your website and give you actionable advice
          to get more clients.
        </div>
      </div>
      <div className="w-full flex justify-around items-center p-5 my-5">
        <Link href="/Contact">
          <a className="bg-green-400 hover:bg-green-300 text-s px-2 py-1 rounded">
            Contact
          </a>
        </Link>
        <Link href="/Contact">
          <a className="bg-green-400 hover:bg-green-300 text-s px-2 py-1 rounded">
            Free Consultation
          </a>
        </Link>
      </div>
    </Layout>
  );
}
