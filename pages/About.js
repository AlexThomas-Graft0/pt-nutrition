import Layout from "../components/Layout";
import Link from "next/link";
import BannerBottom from "../components/BannerBottom";

export default function About() {
  return (
    <Layout title="About">
      <div className="text-3xl font-bold text-center justify-center m-5 ">
        About Us
      </div>
      <div className="text-xl w-1/2">
        <div className="mb-10">
          PT/Nutrition Marketing is a digital marketing agency dedicated to
          growing Pt &amp; Nutrition Businesses. We are focused on results and
          we are as passionate as you are about growing your business.
        </div>
        <div className="mb-10">
          Our team has over 10 years worth of combined experience helping
          companies grow online. We now only work with PTs and Nutritionists by
          improving their online presence and to get new clients. If you have
          any further questions, please don't hesitate in contacting us.
        </div>
        <div className="mb-10">
          If you have any further questions, please don't hesitate in contacting
          us.
        </div>
      </div>
      <div className="text-3xl font-bold text-center justify-center mb-10">
        We focus on getting you more clients, while you focus on running your
        business.
      </div>
      <BannerBottom />
    </Layout>
  );
}
