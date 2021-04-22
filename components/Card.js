import Link from "next/link";
import Icon from "../components/Icon";
export default function Card({ card: { link, icon, title, body, subtext } }) {
  return (
    <div className="p-2 text-center border w-full md:w-72 h-72 max-w-72 rounded-xl flex flex-col items-center justify-center">
      <Icon name={icon} />
      {link ? (
        <Link href={`/${link}`}>
          <a className="hover:text-blue-500 focus:text-blue-500">
            <h3 className="text-xl font-bold my-1">{title} &rarr;</h3>
            <p className="mt-4">{body}</p>
            {subtext && <div className="text-xs mt-1">{subtext}</div>}
          </a>
        </Link>
      ) : (
        <>
          <h3 className="text-xl font-bold my-1">{title} &rarr;</h3>
          <p className="mt-4">{body}</p>
          {subtext && <div className="text-xs mt-1">{subtext}</div>}
        </>
      )}
    </div>
  );
}
