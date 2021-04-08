import Link from "next/link";
export default function Footer() {
  return (
    <footer class="bg-green-500 sm:mt-10 pt-10">
      <div class="max-w-6xl m-auto text-gray-200 flex flex-wrap justify-left">
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-200 font-medium mb-6">
            Services
          </div>
          <Link href="/marketing-solutions">
            <a class="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-700">
              Marketing Solutions
            </a>
          </Link>
          <Link href="/">
            <a class="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-700">
              Our Work
            </a>
          </Link>
          <Link href="/">
            <a class="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-700">
              Growth Tips
            </a>
          </Link>
          <Link href="/">
            <a class="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-700">
              Pricing
            </a>
          </Link>
          <Link href="/">
            <a class="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-700">
              About Us
            </a>
          </Link>
          <Link href="/">
            <a class="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-700">
              Contact Us
            </a>
          </Link>
          <Link href="/">
            <a class="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-700"></a>
          </Link>
        </div>

        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12"></div>
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12"></div>
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-200 font-medium mb-6">
            Legal
          </div>
          <Link href="/privacy-policy">
            <a class="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-700">
              Privacy Policy
            </a>
          </Link>
          <Link href="/terms">
            <a class="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-700">
              Terms &amp; Conditions
            </a>
          </Link>
        </div>
      </div>

      <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-200 text-sm flex-col md:flex-row max-w-6xl">
          <div class="mt-2">
            &copy; pt-nutrition-marketing.co.uk Copyright{" "}
            {new Date().getFullYear()}. All Rights Reserved.
          </div>

          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-facebook-f"></i>
            </a>
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-twitter-alt"></i>
            </a>
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-youtube"></i>
            </a>
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-linkedin"></i>
            </a>
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
