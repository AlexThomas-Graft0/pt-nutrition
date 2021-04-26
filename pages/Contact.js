import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import Icon from "../components/Icon";

export default function Contact() {
  return (
    <Layout title="Contatct">
      <ContactForm />
      <div className="text-gray-800">
        <div className="mb-5">
          <a
            className="flex items-center text-center"
            href="mailto:info@pt-nutrition-marketing.com"
          >
            <Icon name="mail" />
            pt-nutrition-marketing.com
          </a>
        </div>
      </div>
    </Layout>
  );
}
