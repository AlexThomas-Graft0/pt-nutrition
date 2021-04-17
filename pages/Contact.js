import Layout from "../components/Layout";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Marketing() {
  return (
    <Layout title="Contatct">
      <ContactForm />
      <div>
        <div className="m-5">To email a specific department:</div>
        <div className="mb-5">
          <div className="font-bold">Sales</div>
          <div>sales@pt-nutrition-marketing.com</div>
        </div>
        <div className="mb-5">
          <div className="font-bold">Billing</div>
          <div>accounts@pt-nutrition-marketing.com</div>
        </div>
        <div className="mb-5">
          <div className="font-bold">General</div>
          <div>info@pt-nutrition-marketing.com</div>
        </div>
      </div>
      <div className="w-full flex justify-around items-center p-5 my-5">
        <Link href="/Contact">
          <a className="bg-green-400 hover:bg-green-300 text-s px-2 py-1 rounded">
            Contact
          </a>
        </Link>
        <Link href="/Contact">
          <a className="bg-green-400 hover:bg-green-300 text-s px-2 py-1 rounded">
            Free Consultation
          </a>
        </Link>
      </div>
    </Layout>
  );
}
