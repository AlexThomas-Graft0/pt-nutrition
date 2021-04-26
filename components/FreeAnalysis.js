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
        <div className="bg-analysis-banner-image w-full m-10 h-96 bg-cover bg-center flex flex-col justify-center items-center text-2xl">
          <span className="font-bold">If you have a website,</span> get a free
          analysis worth <span className="font-bold text-3xl">£500</span>
          <div className="font-bold my-3">Done by people - not software.</div>
          {/* OPEN UP MODAL WITH FORM FOR WEBSITE URL, EMAIL, NAME, CONTACT NUMBER */}
          <Button rounded="true" onClick={() => setShowModal(!showModal)}>
            Free Analysis
          </Button>
        </div>
      )}
    </>
  );
}
