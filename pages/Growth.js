import Layout from "../components/Layout";
import Link from "next/link";

export default function Growth() {
  return (
    <Layout title="Growth">
      <div className="text-3xl font-bold text-center justify-center m-5 ">
        Growth Advice for PTs & Nutritionists
      </div>

      <div className="w-full flex justify-around items-center p-5 my-5">
        <Link href="/Contact">
          <a className="bg-green-400 hover:bg-green-300 text-xs px-2 py-1 rounded">
            Contact
          </a>
        </Link>
        <Link href="/Contact">
          <a className="bg-green-400 hover:bg-green-300 text-xs px-2 py-1 rounded">
            Free Consultation
          </a>
        </Link>
      </div>
    </Layout>
  );
}
