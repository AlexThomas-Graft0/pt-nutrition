import Layout from "../components/Layout";
import BannerBottom from "../components/BannerBottom";

export default function Blog() {
  return (
    <Layout
      title="Blog"
      banner={
        <div className="h-96 bg-blog-header-image bg-cover bg-center flex flex-col justify-center items-center text-black text-center">
          <h1 className="text-5xl font-bold w-1/3">Check Out Our Blog</h1>
        </div>
      }
    >
      <div className="text-xl mt-3 text-center">
        Discover the latest projects and news from PT Nutrition Marketing.
      </div>
      <BannerBottom />
    </Layout>
  );
}
