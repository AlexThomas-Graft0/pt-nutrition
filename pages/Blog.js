import Layout from "../components/Layout";
import BannerBottom from "../components/BannerBottom";

export default function Blog() {
  return (
    <Layout
      title="Blog"
      banner={
        <div className="h-96 bg-blog-header-image bg-cover bg-center flex flex-col justify-center items-center text-gray-800 text-center">
          <h1 className="text-4xl font-bold md:w-1/3">Check Out Our Blog</h1>
        </div>
      }
    >
      <div className="flex justify-center items-center text-center md:text-3xl my-3 md:h-20">
        Discover the latest projects and news from PT Nutrition Marketing.
      </div>
      <BannerBottom />
    </Layout>
  );
}
