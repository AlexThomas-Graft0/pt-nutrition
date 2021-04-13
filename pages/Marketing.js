import Layout from "../components/Layout";
import Cards from "../components/Cards";
import { LockOpenIcon } from "@heroicons/react/outline";

export default function Marketing() {
  return (
    <Layout title="Marketing">
      <h2 className="text-2xl"></h2>This is the marketing
      <h2 /> page
      <div>
        <Cards />
        <LockOpenIcon class="h-5 w-5 text-green-500" />
      </div>
    </Layout>
  );
}
