import { useState } from "react";
import Button from "../components/Button";
import FreeAnalysisForm from "../components/FreeAnalysisForm";

export default function FreeAnalysis() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <FreeAnalysisForm setShowModal={setShowModal} showModal={showModal} />
      )}
      {!showModal && (
        <div class="bg-web-design-header-image w-full h-96 bg-cover bg-center flex flex-col justify-center items-center space-y-3 text-2xl">
          <span className="font-bold">If you have a website</span>, get a free
          analysis worth <span className="font-bold">£500</span>.
          <div class="font-bold">Done by people - not software.</div>
          {/* OPEN UP MODAL WITH FORM FOR WEBSITE URL, EMAIL, NAME, CONTACT NUMBER */}
          <Button onClick={() => setShowModal(!showModal)}>
            Free Analysis
          </Button>
        </div>
      )}
    </>
  );
}
