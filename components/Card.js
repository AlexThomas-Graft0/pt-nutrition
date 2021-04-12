import Image from "next/image";
import Link from "next/link";

export default function Card({ card: { link, icon, title, body, subtext } }) {
  return (
    <div className="p-6 mt-6 text-left border w-1/4 m-h-1/3 rounded-xl hover:text-blue-600 focus:text-blue-600">
      <Link href={`/${link}`}>
        <a>
          <Image
            src="/images/social.png"
            alt="social"
            width={250}
            height={250}
          />
          <h3 className="text-xl font-bold">{title} &rarr;</h3>
          <p className="mt-4">{body}</p>
          <div className="text-xs">{subtext}</div>
        </a>
      </Link>
    </div>
  );
}
