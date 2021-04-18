import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import FreeAnalysis from "../components/FreeAnalysis";
import PriceCards from "../components/PriceCards";

export default function Pricing() {
  return (
    <>
      <Layout
        title="Pricing"
        banner={
          <>
            <div className="h-96 bg-online-ads-header-image bg-cover bg-center flex flex-col justify-center items-center text-gray-800 text-center">
              <h1 className="text-5xl font-bold w-1/3">
                PT &amp; Nutritionist Marketing Pricing Options
              </h1>
              <div className="mt-3 text-2xl w-1/2">
                Online Advertising for PTS &amp; Nutritionists
              </div>
            </div>
            <PriceCards />
          </>
        }
      >
        <div className="text-center flex flex-col space-y-5">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="flex flex-wrap justify-center items-center h-full">
            <div className="py-20 px-10 m-2 md:w-1/3 h-32 max-w-3xl border rounded shadow-md flex flex-col justify-center items-center space-y-5">
              <h3 className="text-2xl font-semibold">
                How long is the contract?
              </h3>
              <div>
                The Standard option is month-to-month and the Premium option is
                for 12 months as it includes a conversion-centered website.
              </div>
            </div>
            <div className="py-20 px-10 m-2 md:w-1/3 h-32 max-w-3xl border rounded shadow-md flex flex-col justify-center items-center space-y-5">
              <h3 className="text-2xl font-semibold">
                What if I just want a website?
              </h3>
              <div>
                Contact us and we can assist you with this. Remember, a website
                without targeted traffic is as good as a business without
                customers.
              </div>
            </div>
            <div className="py-20 px-10 m-2 md:w-1/3 h-32 max-w-3xl border rounded shadow-md flex flex-col justify-center items-center space-y-5">
              <h3 className="text-2xl font-semibold">
                What if I have a higher budget?
              </h3>
              <div>
                Contact us to discuss a custom plan that works for your business
                to see better results.
              </div>
            </div>
            <div className="py-20 px-10 m-2 md:w-1/3 h-32 max-w-3xl border rounded shadow-md flex flex-col justify-center items-center space-y-5">
              <h3 className="text-2xl font-semibold">
                Do you have any cheaper options?
              </h3>
              <div>
                Not at this moment. We are dedicated to growing your PT &amp;
                Nutritionist business and this is the smallest budget needed to
                see long-term growth.
              </div>
            </div>
          </div>
          <div className="text-xs">
            Have any additional questions?
            <Link href="/Contact">
              <a className="hover:text-blue-400 text-blue-500"> Contact us</a>
            </Link>
          </div>
          <div className="text-sm">(Pricing in GBP)</div>
        </div>
      </Layout>
    </>
  );
}
