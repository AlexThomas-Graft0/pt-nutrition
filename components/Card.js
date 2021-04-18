import Link from "next/link";
import Icon from "../components/Icon";

export default function Card({ card: { link, icon, title, body, subtext } }) {
  return (
    <div className="p-6 mt-6 text-center border w-full md:w-72 h-52 rounded-xl hover:text-blue-500 focus:text-blue-500 flex flex-col items-center justify-evenly">
      <Icon name={icon} />
      <Link href={`/${link}`}>
        <a>
          <h3 className="text-xl font-bold my-1">{title} &rarr;</h3>
          <p className="mt-4">{body}</p>
          {subtext && <div className="text-xs mt-1">{subtext}</div>}
        </a>
      </Link>
    </div>
  );
}
