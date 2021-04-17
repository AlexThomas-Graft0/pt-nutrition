import Image from "next/image";
import Layout from "../components/Layout";

export default function PPC() {
  return (
    <>
      <div className="h-96 bg-header-image bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold w-1/3">
          Effective PPC (AdWords) for PT & Nutritionists
        </h1>
        <div className="mt-3 text-2xl w-1/2">
          We help PTs and Nutitions get more clients through effective PPC
          marketing and conversion centered landing-page design.
        </div>
      </div>
      <Layout title="PPC">
        <div className="w-full flex flex-col space-y-2 justify-center">
          <div className="w-full p-3 flex flex-wrap justify-center">
            <div className="w-80 h-80 bg-contain bg-center bg-ppc-laptop">
              &nbsp;
            </div>
            <div className="w-1/4 flex flex-col space-y-2 justify-center">
              <h3 className="text-3xl my-2">
                The Right Keywords + Right Ads = The Right clients
              </h3>
              <div>
                We don’t just get you clicks, we optimize the whole campaign
                around conversions that turn into clients.
              </div>
            </div>
          </div>
          <div className="w-full p-3 flex flex-wrap justify-center">
            <div className="w-80 h-80 bg-contain bg-center bg-ppc-ab-testing">
              &nbsp;
            </div>
            <div className="w-1/4 flex flex-col space-y-2 justify-center">
              <h3 className="text-3xl my-2">Landing Page Testing</h3>
              <div>
                We analyze results and make relevant design changes using AB
                tests and then optimize the pages to get even more clients.
              </div>
            </div>
          </div>
          <div className="w-full p-3 flex flex-wrap justify-center">
            <div className="w-80 h-80 bg-contain bg-center bg-ppc-management">
              &nbsp;
            </div>
            <div className="w-1/4 flex flex-col space-y-2 justify-center">
              <h3 className="text-3xl my-2">Expert PPC Management</h3>
              <div>
                With experience managing over $1,300,000 in PPC campaigns, we
                know advanced tactics to spend less and get better results.
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
