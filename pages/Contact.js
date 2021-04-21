import Layout from "../components/Layout";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Layout
      title="Contatct"
      banner={
        <div className="h-96 bg-contact-header-image bg-cover bg-center flex flex-col justify-center items-center text-black text-center"></div>
      }
    >
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
    </Layout>
  );
}
