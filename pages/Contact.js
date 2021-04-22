import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Layout title="Contatct">
      <div className="w-1/2 flex justify-around items-center">
        <ContactForm className="mt-5" />
        <div className="text-left">
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
      </div>
    </Layout>
  );
}
