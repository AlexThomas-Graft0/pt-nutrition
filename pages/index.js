import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Link from "next/link";
import BannerBottom from "../components/BannerBottom";

export default function Home() {
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
    <>
      <div className="h-96 bg-header-image bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold w-1/3">
          Do you want to grow your PT or Nutrition Business?
        </h1>
        <div className="mt-3 text-2xl w-1/2">
          With industry knowledge and the benefit of specialising in websites
          for PTs and Nutritions, we know exactly what works and how to grow
          your business.
        </div>
      </div>
      <Layout title="Home">
        <Cards cardData={features} />
        {/* banner */}
        <div className="flex justify-center items-center text-3xl p-3 my-3 md:h-20">
          We focus on getting you more clients, while you focus on running your
          business.
        </div>
        {/* banner */}
        {/* free website analysis */}
        <div className="flex flex-col justify-center items-center px-3 py-5 my-3 space-y-5 bg-green-500 w-full text-white">
          <div className="text-3xl">
            Get A Free Marketing Analysis Of Your Website
          </div>
          <div className="text-xl">
            Our team will go through your website and give you actionable advice
            to get more clients.
          </div>
        </div>
        {/* free website analysis */}
        {/* marketing */}
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold">PT Nutrition Marketing</span> has a
          dedicated team of expert marketers focused on helping personal
          trainers and nutritionists get more clients via and consulting.
          <Link href="/marketing">
            <a>Find out more &rarr;</a>
          </Link>
        </div>
        {/* marketing */}
        {/* blog */}
        <div className="flex flex-wrap px-6">
          <div className="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
            <div className="bg-white hover:shadow-xl cursor-pointer">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                  className="h-56 w-full border-white border-8 hover:opacity-25"
                />
              </div>
              <div className="px-4 py-4 md:px-10">
                <h1 className="font-bold text-lg">
                  7 Lead Generation Tips for PTs Websites around Cardiff
                </h1>
                <p className="py-4">
                  How do <span className="font-bold">you</span> attract these
                  new clients – especially in today's world where website
                  visitors have short attention spans and access to more
                  competition?
                </p>
                <p className="py-4">
                  Everyone seems to be a PT lately - how can{" "}
                  <span className="font-bold">you</span> stand out against the
                  crowd?
                </p>
                <p className="py-4">
                  2020 is a difficult year for gaining clients, gyms are closed,
                  nobody has equipment at home, how can{" "}
                  <span className="font-bold">you</span> get clients during this
                  period?
                </p>
                <div className="flex flex-col justify-center pt-8">
                  <div className=" text-sm font-medium">April 1st,2021</div>
                  <div>Read More &rarr;</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
            <div className="bg-white hover:shadow-xl cursor-pointer">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                  className="h-56 w-full border-white border-8 hover:opacity-25"
                />
              </div>
              <div className="px-4 py-4 md:px-10">
                <h1 className="font-bold text-lg">
                  7 Lead Generation Tips for PTs Websites around Cardiff
                </h1>
                <p className="py-4">
                  How do <span className="font-bold">you</span> attract these
                  new clients – especially in today's world where website
                  visitors have short attention spans and access to more
                  competition?
                </p>
                <p className="py-4">
                  Everyone seems to be a PT lately - how can{" "}
                  <span className="font-bold">you</span> stand out against the
                  crowd?
                </p>
                <p className="py-4">
                  2020 is a difficult year for gaining clients, gyms are closed,
                  nobody has equipment at home, how can{" "}
                  <span className="font-bold">you</span> get clients during this
                  period?
                </p>
                <div className="flex flex-col justify-center pt-8">
                  <div className=" text-sm font-medium">April 1st,2021</div>
                  <div>Read More &rarr;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog */}
        {/* Banner */}
        <BannerBottom />
        {/* Banner */}
      </Layout>
    </>
  );
}
