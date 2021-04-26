import Layout from "../components/Layout";
import FreeAnalysis from "../components/FreeAnalysis";
import BannerBottom from "../components/BannerBottom";
import FreeAnalysisBanner from "../components/FreeAnalysisBanner";

export default function Portfolio() {
  return (
    <Layout
      title="Portfolio"
      banner={
        <div className="h-96 bg-portfolio-header-image bg-cover bg-center flex flex-col justify-center items-center text-gray-800 text-center">
          <h1 className="text-4xl font-bold md:w-1/2">
            Our Work for PTs &amp; Nutritionists
          </h1>
        </div>
      }
    >
      <div className="text-xl md:w-1/2 mb-3">
        <div className="text-xl text-center ">
          Finding the right marketing agency is not easy... there are so many
          choices to choose from. This is why we ONLY work with PT &amp;
          Nutritionist business. We get more clients through effective online
          marketing and development.
        </div>
      </div>
      <div className="my-3 text-2xl md:w-1/2 justify-center text-center text-red-500">
        Portfolio cards/examples/gallery goes here.
      </div>
      <div className="w-full flex justify-center">
        <FreeAnalysis />
      </div>
      <div className="w-full flex justify-center">
        <FreeAnalysisBanner />
      </div>
      <BannerBottom />
    </Layout>
  );
}
