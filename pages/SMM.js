import Image from "next/image";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import FreeAnalysis from "../components/FreeAnalysis";

export default function SMM() {
  return (
    <>
      <Layout
        title="Social Media Marketing - PT Nutrition Marketing"
        banner={
          <div className="h-96 bg-smm-header-image bg-cover bg-center flex flex-col justify-center items-center text-gray-800 text-center">
            <h1 className="text-5xl font-bold w-1/3">SMM</h1>
            <div className="mt-3 text-2xl font-semibold w-1/2">
              Social Media Marketing for PT &amp; Nutritionists
            </div>
          </div>
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
