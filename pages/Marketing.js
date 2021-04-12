import Layout from "../components/Layout";
import Cards from "../components/Cards";

export default function Marketing() {
  return (
    <Layout title="Marketing">
      <h2 className="text-2xl"></h2>This is the marketing
      <h2 /> page
      <div>
        <Cards />
      </div>
    </Layout>
  );
}
