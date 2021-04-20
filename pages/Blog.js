import Layout from "../components/Layout";
import Link from "next/link";
import BannerBottom from "../components/BannerBottom";

export default function Blog() {
  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      <BannerBottom />
    </Layout>
  );
}
