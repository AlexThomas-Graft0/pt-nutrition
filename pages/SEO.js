import Layout from "../components/Layout";
import Image from "next/image";

export default function SEO() {
  return (
    <>
      <Layout
        title="SEO"
        banner={
          <div className="h-96 bg-header-image bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-5xl font-bold w-1/3">
              SEO for PT & Nutritionists
            </h1>
          </div>
        }
      >
        <div class="flex w-full">
          <Image src="/images/ptseo.png" width="761" height="944" />
          <div class="flex flex-col items-center">
            <div className="leading text-xl my-2 w-1/2 text-center">
              Being in the top 3 positions on Google can often mean the
              difference between an overbooked PT & Nutrtionist business and one
              that is struggling to get more clients.
            </div>
            <div className="leading text-xl my-2 w-1/2 text-center">
              Through long-term SEO strategies and proven results, we help PT &
              Nutrtionists rank higher on Google to get more clients.
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl">
            SEO is not only limited to the common searches like "PT &
            Nutrtionist in Cardiff".
          </h2>
          Overlooked SEO terms to rank for are:
          <ul>
            <li>"Fat Loss"</li>
            <li>"Gender Specific PT"</li>
            <li>"Healthy Diet"</li>
            <li>"Toning Diet"</li>
            <li>and many others</li>
          </ul>
          Effective SEO can result in a significant increase in clients which
          means higher profits for the PT & Nutrtionist partners.
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h2 class="text-2xl">The Importance of SEO</h2>
          <div class="my-2 antialiased tracking-wide">
            To understand the potential of SEO, if your PT & Nutrtion business
            ranks in the top 3 positions for "personal trainer Cardiff" which
            receives over 200+ searches per month, your business could easily
            receive a minimum of 2-3 clients every month.
          </div>
          <div class="my-2 antialiased tracking-wide">
            Even if we work on a small amount of £100 for a 1:1, 1 hour session
            x 5 clients = £500 per week, £2,000 per month or £24,000 extra per
            annum.
          </div>
          <div class="my-2 antialiased tracking-wide">
            It's important to note that this is a minor example. Effective SEO
            bundled with various marketing strategies can yield significantly
            higher returns.
          </div>
        </div>
      </Layout>
    </>
  );
}
