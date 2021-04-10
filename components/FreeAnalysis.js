import { useState } from "react";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";

export default function FreeAnalysis() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div class="bg-web-design-header-image w-1/2 h-96 bg-cover bg-center flex flex-col justify-center items-center space-y-3 text-2xl">
      {showModal && (
        <div>
          <Button onClick={() => setShowModal(!showModal)}>&larr;</Button>

          <ContactForm />
        </div>
      )}
      <div>
        <span className="font-bold">If you have a website</span>, get a free
        analysis worth <span className="font-bold">£500</span>.
      </div>
      <div class="font-bold">Done by people - not software.</div>
      {/* OPEN UP MODAL WITH FORM FOR WEBSITE URL, EMAIL, NAME, CONTACT NUMBER */}
      <Button onClick={() => setShowModal(!showModal)}>Free Analysis</Button>
    </div>
  );
}
