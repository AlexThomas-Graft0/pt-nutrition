import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../components/Button";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  const links = [
    "Home",
    "Marketing",
    "Portfolio",
    "Blog",
    "About",
    "Contact",
  ].map((link, key) => {
    const router = useRouter();

    const setActiveClasses = (link) => {
      const linkpath = `/${link}`;

      if (
        linkpath == router.pathname ||
        (linkpath == "/Home" && router.pathname == "/")
      ) {
        return true;
      } else {
        return false;
      }
    };

    return (
      <li key={key} className="mr-3">
        <Link href={link == "Home" ? "/" : `/${link}`}>
          <a
            className={`${
              setActiveClasses(link) ? "font-bold text-xl text-white " : ""
            } inline-block px-4 py-2 text-gray-200 hover:text-white`}
          >
            {link}
          </a>
        </Link>
      </li>
    );
  });
  return (
    <>
      <div className="w-full hidden md:flex justify-between items-center p-5 my-3">
        <Link href="/Contact">
          <a className="bg-green-400 hover:bg-green-300 text-s font-bold text-white px-2 py-1 rounded">
            Contact
          </a>
        </Link>
        <Link href="/Contact">
          <a className="bg-green-400 hover:bg-green-300 text-s font-bold text-white px-2 py-1 rounded">
            Free Consultation
          </a>
        </Link>
      </div>
      <nav className={`text-white lg:bg-opacity-90 lg:bg-green-500 py-2`}>
        <div className="container flex flex-wrap items-center justify-between w-full mx-auto mt-0">
          <div className="flex justify-start pl-4">
            <Link href="/">
              <a className="font-bold no-underline toggleColour hover:no-underline lg:text-4xl">
                PT Nutrition Marketing
              </a>
            </Link>
          </div>
          <div className="block pr-4 lg:hidden">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-green-800 transition duration-300 ease-in-out transform hover:text-white focus:outline-none focus:shadow-outline hover:scale-105"
              onClick={toggleOpen}
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "" : "hidden"
            } z-20 flex-grow w-full p-4 mt-2 text-xl text-gray-300 bg-green-400 bg-opacity-75 lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0`}
            id="nav-content"
          >
            <ul
              className="items-center justify-end flex-1 list-reset lg:flex"
              onClick={() => setOpen(false)}
            >
              {links}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
