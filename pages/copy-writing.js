import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import FreeAnalysis from "../components/FreeAnalysis";

export default function CopyWriting() {
  const [features, setFeatures] = useState([]);
  async function fetchFeatures() {
    const res = await fetch(`/api/copywritingFeatures`);
    const copywritingFeatures = await res.json();
    setFeatures(copywritingFeatures);
  }
  useEffect(() => {
    fetchFeatures();
  }, []);

  return (
    <>
      <Layout
        title="Copy Writing"
        banner={
          <div className="h-96 bg-copy-writing-header-image bg-cover bg-center flex flex-col justify-center items-center text-gray-800 text-center">
            <h1 className="text-5xl font-bold w-1/3">Copy Writing</h1>
            <div className="mt-3 text-2xl font-semibold w-1/2">
              Content Marketing for PTS &amp; Nutritionists
            </div>
          </div>
        }
      >
        <div className="flex flex-col space-y-5 justify-start items-center text-xl">
          <h2 className="text-3xl font-bold my-2 p-3">What is Copy Writing?</h2>
          <div>
            Copy Writing is an the art of writing content in a way that markets
            your site through the use of various keywords and strategies, it is
            an essential marketing strategy to grow your PT or Nutritionist
            Business online and to get more clients.
          </div>
          <h3 className="text-2xl font-semibold">
            Why Is Content Marketing Important?
          </h3>
          <Cards cardData={features} classes="max-w-4xl" />
          <h3 className="text-2xl font-semibold text-center mt-3">
            How we grow your business with Copy Writing:
          </h3>
          <Image
            src="/images/content-writing-graphic.jpg"
            width="480"
            height="440"
          />
        </div>
        <div className="w-full flex justify-around items-center mt-3">
          <ContactForm />
          <FreeAnalysis />
        </div>
      </Layout>
    </>
  );
}
