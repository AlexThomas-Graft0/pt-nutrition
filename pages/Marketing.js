import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Link from "next/link";

export default function Marketing() {
  return (
    <Layout title="Marketing">
      <div>
        <div className="text-3xl font-bold text-center justify-center w-100 mb-5 ">
          Online Marketing Solutions for PTs & Nutritionists
        </div>
        <div className="text-xl text-center justify-center">
          Finding the right marketing company among the multitude of choices
          available is not easy. For this reason we specialize in PTs and
          Nutrition Businesses. We aquire clients through effective online
          marketing and development. We provide the following services:
        </div>
        <Cards />
        <div className="text-xl text-center justify-center font-bold m-10">
          Scenario #1: You Already Have A Website
        </div>
        <div className="text-xl text-center justify-center">
          If you already have a website, was is just created by an
          individual/company who creates websites that they thought may look
          good or does it actually work? Does it send the right message across
          to a potential clients about what they are looking for? Does it
          fulfill your business objective of getting more patients?
        </div>
      </div>
      <div className="text-xl text-center justify-center font-bold m-10">
        Scenario #2: You Don't Have A Website Yet
      </div>
      <div className="text-xl text-center justify-center mb-5">
        If you don't currently have a website, it's extremely important to have
        one in this competitive market. All credible Pts & Nutrtionists have
        effective websites that showcase their expertise and experience and it
        results in more clients and higher profits.
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
