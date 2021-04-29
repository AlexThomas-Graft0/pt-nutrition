import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-green-500 pt-10">
      <div className="text-gray-50 flex justify-between">
        <div className="p-5 w-full">
          <div className="text-xs uppercase text-gray-50 font-medium mb-6">
            Services
          </div>
          <Link href="/Marketing">
            <a className="my-3 block text-gray-50 hover:text-white text-sm font-medium duration-500">
              Marketing Solutions
            </a>
          </Link>
          <Link href="/Portfolio">
            <a className="my-3 block text-gray-50 hover:text-white text-sm font-medium duration-500">
              Our Work
            </a>
          </Link>
          <Link href="/Blog">
            <a className="my-3 block text-gray-50 hover:text-white text-sm font-medium duration-500">
              Blog
            </a>
          </Link>
          <Link href="/Pricing">
            <a className="my-3 block text-gray-50 hover:text-white text-sm font-medium duration-500">
              Pricing
            </a>
          </Link>
          <Link href="/About">
            <a className="my-3 block text-gray-50 hover:text-white text-sm font-medium duration-500">
              About Us
            </a>
          </Link>
          <Link href="/Contact">
            <a className="my-3 block text-gray-50 hover:text-white text-sm font-medium duration-500">
              Contact Us
            </a>
          </Link>
          <Link href="/">
            <a className="my-3 block text-gray-50 hover:text-white text-sm font-medium duration-500"></a>
          </Link>
        </div>

        <div className="p-5 w-full md:flex md:w-1/2">
          <div className="hidden md:flex text-xs uppercase text-gray-50 font-medium my-3">
            Legal
          </div>
          <Link href="/Privacy-Policy">
            <a className="my-3 block text-gray-50 hover:text-white text-sm font-medium duration-500">
              Privacy Policy
            </a>
          </Link>
          <Link href="/Terms">
            <a className="my-3 block text-gray-50 hover:text-white text-sm font-medium duration-500">
              Terms &amp; Conditions
            </a>
          </Link>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-50 text-sm flex-col md:flex-row max-w-6xl">
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
