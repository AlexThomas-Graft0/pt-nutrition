import Link from "next/link";

export default function BannerBottom() {
  return (
    <div className="w-full flex justify-around items-center p-5 my-3">
      <Link href="/Contact">
        <a className="bg-green-400 hover:bg-green-300 text-s font-semibold text-white px-2 py-1 rounded">
          Contact
        </a>
      </Link>
      <Link href="/Contact">
        <a className="bg-green-400 hover:bg-green-300 text-s font-semibold text-white px-2 py-1 rounded">
          Free Consultation
        </a>
      </Link>
    </div>
  );
}
