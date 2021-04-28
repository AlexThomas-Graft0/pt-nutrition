import Image from "next/image";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import FreeAnalysis from "../components/FreeAnalysis";

export default function Ads() {
  return (
    <>
      <Layout
        title="Ads"
        banner={
          <div className="h-96 bg-ads-header-image bg-cover bg-center flex flex-col justify-center items-center text-gray-800 text-center">
            <h1 className="text-5xl font-bold w-1/3">Ads</h1>
            <div className="mt-3 text-2xl font-semibold">
              Online Advertising for PTS &amp; Nutritionists
            </div>
          </div>
        }
      >
        <div className="flex flex-col space-y-5 justify-start items-center text-xl">
          <h2 className="text-3xl font-bold my-2 p-3">
            How can you advertise online?
          </h2>
          {/* pull in internetlivestats.com/one-second stats for live feed */}
          <div className="">
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
            You can check out more stats here.
            <a href="https://www.internetlivestats.com">internet live stats</a>
          </div>
          <div className="flex justify-between md:w-1/2">
            <div className=" border rounded mx-2 p-5 text-center shadow-lg md:w-1/2">
              Online advertising is one of the best ROI forms of client
              aquisition around today.
            </div>
            <div className="border rounded mx-2 p-5 text-center shadow-lg md:w-1/2">
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
          <div className="justify-center text-center">
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
