import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import FreeAnalysis from "../components/FreeAnalysis";
import Header from "../components/Header";

export default function Ads() {
  const [features, setFeatures] = useState([]);
  async function fetchFeatures() {
    const res = await fetch(`http://localhost:3000/api/adsFeatures`);
    const adsFeatures = await res.json();
    setFeatures(adsFeatures);
  }
  useEffect(() => {
    fetchFeatures();
  });

  return (
    <>
      <Layout
        title="Ads"
        banner={
          <Header
            background="copy-writing-header-image"
            textColor="gray"
            textShade="800"
          >
            Copy Writing as Content Marketing for PTS &amp; Nutritionists
          </Header>
        }
      >
        <div className="flex flex-col space-y-5 justify-start items-center text-xl">
          <h2 className="text-3xl font-bold my-2 p-3">
            How can you advertise online?
          </h2>
          {/* pull in internetlivestats.com/one-second stats for live feed */}
          <div>
            Advertising online has never been easier.
            <ul className="list-none list-inside m-2">
              <li>
                Around<span className="font-bold"> 10,000 Tweets</span> sent
                every second
              </li>
              <li>
                Over<span className="font-bold"> 1,000 Instagram</span> uploads
                every second
              </li>
              <li>
                Nearly<span className="font-bold"> 100,000 Google</span>
                searches every second
              </li>
              <li>
                Over <span className="font-bold">85,000 Youtube</span> videos
                watched every second
              </li>
              <li>
                Over<span className="font-bold"> 3,000,000 Emails</span> sent
                every second
              </li>
            </ul>
          </div>
          <div className="flex ">
            <div className="w-96 border rounded mx-2 p-5 text-center shadow-lg">
              Online advertising is one of the best ROI forms of client
              aquisition around today.
            </div>
            <div className="w-96 border rounded mx-2 p-5 text-center shadow-lg">
              Online Advertising is a great way to acquire new clients for PTs
              &amp; Nutritionists.
            </div>
          </div>
          <div className="my-10">
            <Image
              src="/images/online-advertising-graphic.jpg"
              width="480"
              height="440"
            />
          </div>
          <div>
            Each advertising platform provides various targeting options to
            advertise to potential clients.
          </div>
          <div>A simple illustration can be:</div>
          <div className="my-10">
            <Image
              src="/images/online-advertisements-explained.jpg"
              width="280"
              height="600"
            />
          </div>
          <div className="w-3/4 text-center">
            Personal Trainers &amp; Nutritionists Marketing has a highly
            qualified marketing team to create, optimize and manage your online
            advertisements so that your business gets more clients.
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
