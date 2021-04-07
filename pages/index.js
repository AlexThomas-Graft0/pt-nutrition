import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-96 bg-header-image bg-cover bg-center flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold w-1/3 text-center">
          Do you want to grow your PT or Nutrition Business?
        </h1>
        <div className="mt-3 text-2xl w-1/2">
          With industry knowledge and the benefit of specialising in websites
          for PTs and Nutritions, we know exactly what works and how to grow
          your business.
        </div>
      </div>
      <Layout title="Home">
        <div className="flex flex-wrap items-center justify-around max-w-7xl mt-6 sm:w-full">
          <a
            href="/web-design"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Image
              src="/images/website.png"
              alt="websites"
              width={250}
              height={250}
            />
            <h3 className="text-xl font-bold">Websites that work &rarr;</h3>
            <p className="mt-4">
              We don't just create websites. We create websites that get
              results.
            </p>
            <div className="text-xs">Learn more about web design</div>
          </a>

          <a
            href="/ppc-for-pt-nutrition"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Image src="/images/ppc.png" alt="ppc" width={250} height={250} />
            <h3 className="text-xl font-bold">Google AdwWordsr Click &rarr;</h3>
            <p className="mt-4 text-xl">
              We aim to get you the best results and land you leads through
              targets ads.
            </p>
            <div className="text-xs">Learn more about AdWords</div>
          </a>

          <a
            href="/seo-for-pt-nutrition"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Image src="/images/seo.png" alt="seo" width={250} height={250} />
            <h3 className="text-xl font-bold">SEO &rarr;</h3>
            <p className="mt-4">
              Effective on-page and off-page SEO to get you ranking in top
              positions on Google.
            </p>
            <div className="text-xs">Learn more about web SEO</div>
          </a>

          <a
            href="/content-marketing"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Image
              src="/images/content.png"
              alt="content"
              width={250}
              height={250}
            />
            <h3 className="text-xl font-bold">Content Writing &rarr;</h3>
            <p className="mt-4">
              Our writers are highly-skilled communicators and persuaders.
            </p>
            <div className="text-xs">Learn more about content writing</div>
          </a>

          <a
            href="/online-advertising"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Image
              src="/images/target.png"
              alt="target"
              width={250}
              height={250}
            />
            <h3 className="text-xl font-bold">Online Advertising &rarr;</h3>
            <p className="mt-4">
              Target the right person with the right message at the right time.
            </p>
            <div className="text-xs">Learn more about online ads</div>
          </a>

          <a
            href="/social-media"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Image
              src="/images/social.png"
              alt="social"
              width={250}
              height={250}
            />
            <h3 className="text-xl font-bold">Social Media &rarr;</h3>
            <p className="mt-4">
              Social media growth to improve credability and gain new clients.
            </p>
            <div className="text-xs">Learn more about social media</div>
          </a>
        </div>
        {/* banner */}
        <div className="flex justify-center items-center text-3xl p-3 my-3 md:h-20">
          We focus on getting you more clients, while you focus on running your
          business.
        </div>
        {/* banner */}
        {/* free website analysis */}
        <div className="flex flex-col justify-center items-center px-3 py-5 my-3 space-y-5 bg-green-500 w-full text-gray-50">
          <div className="text-3xl">
            Get A Free Marketing Analysis Of Your Website
          </div>
          <div className="text-xl">
            Our team will go through your website and give you actionable advice
            to get more clients.
          </div>
        </div>
        {/* free website analysis */}
        {/* marketing */}
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold">PT Nutrition Marketing</span> has a
          dedicated team of expert marketers focused on helping personal
          trainers and nutritionists get more clients via and consulting.
          <Link href="/marketing-solutions">
            <a>Find out more &rarr;</a>
          </Link>
        </div>
        {/* marketing */}
        {/* blog */}
        <div class="flex flex-wrap px-6">
          <div class="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
            <div class="bg-white hover:shadow-xl cursor-pointer">
              <div class="">
                <img
                  src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                  class="h-56 w-full border-white border-8 hover:opacity-25"
                />
              </div>
              <div class="px-4 py-4 md:px-10">
                <h1 class="font-bold text-lg">
                  7 Lead Generation Tips for PTs Websites around Cardiff
                </h1>
                <p class="py-4">
                  How do <span className="font-bold">you</span> attract these
                  new clients – especially in today's world where website
                  visitors have short attention spans and access to more
                  competition?
                </p>
                <p class="py-4">
                  Everyone seems to be a PT lately - how can{" "}
                  <span className="font-bold">you</span> stand out against the
                  crowd?
                </p>
                <p class="py-4">
                  2020 is a difficult year for gaining clients, gyms are closed,
                  nobody has equipment at home, how can{" "}
                  <span className="font-bold">you</span> get clients during this
                  period?
                </p>
                <div class="flex flex-col justify-center pt-8">
                  <div class=" text-sm font-medium">April 1st,2021</div>
                  <div>Read More &rarr;</div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
            <div class="bg-white hover:shadow-xl cursor-pointer">
              <div class="">
                <img
                  src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                  class="h-56 w-full border-white border-8 hover:opacity-25"
                />
              </div>
              <div class="px-4 py-4 md:px-10">
                <h1 class="font-bold text-lg">
                  7 Lead Generation Tips for PTs Websites around Cardiff
                </h1>
                <p class="py-4">
                  How do <span className="font-bold">you</span> attract these
                  new clients – especially in today's world where website
                  visitors have short attention spans and access to more
                  competition?
                </p>
                <p class="py-4">
                  Everyone seems to be a PT lately - how can{" "}
                  <span className="font-bold">you</span> stand out against the
                  crowd?
                </p>
                <p class="py-4">
                  2020 is a difficult year for gaining clients, gyms are closed,
                  nobody has equipment at home, how can{" "}
                  <span className="font-bold">you</span> get clients during this
                  period?
                </p>
                <div class="flex flex-col justify-center pt-8">
                  <div class=" text-sm font-medium">April 1st,2021</div>
                  <div>Read More &rarr;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog */}
        {/* Banner */}
        <div className="w-full flex justify-around items-center p-5 my-5">
          <Link href="/contact">
            <a className="bg-green-400 hover:bg-green-300 text-xs px-2 py-1 rounded">
              Contact
            </a>
          </Link>
          <Link href="/contact">
            <a className="bg-green-400 hover:bg-green-300 text-xs px-2 py-1 rounded">
              Free Consultation
            </a>
          </Link>
        </div>
        {/* Banner */}
      </Layout>
    </>
  );
}
