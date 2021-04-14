import Layout from "../components/Layout";
import FreeAnalysis from "../components/FreeAnalysis";
import Link from "next/link";

export default function Marketing() {
  return (
    <Layout title="Portfolio">
      <div>
        <div className="text-3xl font-bold text-center justify-center w-100 mb-5 ">
          Our Work for PTs & Nutritionists
        </div>
        <div className="text-xl text-center justify-center">
          Finding the right marketing agency is not easy... there are so many
          choices to choose from. This is why we ONLY work with PT &
          Nutritionist business. We get more clients through effective online
          marketing and development.
        </div>
        <FreeAnalysis></FreeAnalysis>
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
        <Link href="/contact">
          <a className="bg-green-400 hover:bg-green-300 text-xs px-2 py-1 rounded">
            Contact
          </a>
        </Link>
        <Link href="/contact">
          <a className="bg-green-400 hover:bg-green-300 text-xs px-2 py-1 rounded">
            Free Consultation
          </a>
        </Link>
      </div>
    </Layout>
  );
}
