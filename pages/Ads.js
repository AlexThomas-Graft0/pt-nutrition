import Layout from "../components/Layout";

export default function Ads() {
  return (
    <>
      <Layout title="Ads">
        <div className="h-96 bg-header-image bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold w-1/3">
            Effective PPC (AdWords) for PT & Nutritionists
          </h1>
          <div className="mt-3 text-2xl w-1/2">
            We help PTs and Nutitions get more clients through effective PPC
            marketing and conversion centered landing-page design.
          </div>
        </div>
        <h1>Ads</h1>
      </Layout>
    </>
  );
}
