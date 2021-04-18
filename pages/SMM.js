// import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
// import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import FreeAnalysis from "../components/FreeAnalysis";
import Header from "../components/Header";

export default function SMM() {
  // const [features, setFeatures] = useState([]);
  // async function fetchFeatures() {
  //   const res = await fetch(`http://localhost:3000/api/adsFeatures`);
  //   const adsFeatures = await res.json();
  //   setFeatures(adsFeatures);
  // }
  // useEffect(() => {
  //   fetchFeatures();
  // });

  return (
    <>
      <Layout
        title="Ads"
        banner={
          <Header heading="SMM" background="lol-image" classes="text-gray-50">
            Social Media Marketing for PT &amp; Nutritionists
          </Header>
        }
      >
        <div className="flex flex-col space-y-5 justify-start items-center text-xl">
          <h2 className="text-3xl font-bold my-2 p-3">
            What is Social Media Marketing
          </h2>
          <div>
            Social Media portrays credibility and it's an effective tool to
            inform existing clients of relevant news as well as to acquire new
            clients.
          </div>
          <div className="flex flex-col space-y-5 justify-start items-center text-xl">
            <h2 className="text-3xl font-bold my-2 p-3">
              The main social media platforms for PT & Nutritionists are:
            </h2>
            <div className="my-10">
              <Image
                src="/images/social-media-for-dentists.jpg"
                width="460"
                height="340"
              />
            </div>
          </div>
          <div>
            The truth is that one of the first things potential clients do is to
            find out what other clients think of your PT & Nutritionistry
            business.
          </div>
          <div>The process can be illustrated as follows:</div>
          <div className="my-10">
            <Image
              src="/images/social-media-explained.jpg"
              width="360"
              height="1000"
            />
          </div>
          <div className="w-3/4 text-center">
            We create, optimize and manage your PT & Nutritionist business
            social media profiles to create more credibility so that your
            business gets more clients.
          </div>
          <div className="w-full flex justify-around items-center mt-3">
            <ContactForm />
            <FreeAnalysis />
          </div>
        </div>
      </Layout>
    </>
  );
}
