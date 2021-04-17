import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-green-500 sm:mt-10 pt-10">
      <div className="max-w-6xl m-auto text-gray-200 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-200 font-medium mb-6">
            Services
          </div>
          <Link href="/marketing-solutions">
            <a className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
              Marketing Solutions
            </a>
          </Link>
          <Link href="/">
            <a className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
              Our Work
            </a>
          </Link>
          <Link href="/">
            <a className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
              Growth Tips
            </a>
          </Link>
          <Link href="/">
            <a className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
              Pricing
            </a>
          </Link>
          <Link href="/">
            <a className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
              About Us
            </a>
          </Link>
          <Link href="/">
            <a className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
              Contact Us
            </a>
          </Link>
          <Link href="/">
            <a className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"></a>
          </Link>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12"></div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12"></div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-200 font-medium mb-6">
            Legal
          </div>
          <Link href="/privacy-policy">
            <a className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
              Privacy Policy
            </a>
          </Link>
          <Link href="/terms">
            <a className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700">
              Terms &amp; Conditions
            </a>
          </Link>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-200 text-sm flex-col md:flex-row max-w-6xl">
          <div className="mt-2">
            &copy; pt-nutrition-marketing.co.uk Copyright{" "}
            {new Date().getFullYear()}. All Rights Reserved.
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-twitter-alt"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-youtube"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-linkedin"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
