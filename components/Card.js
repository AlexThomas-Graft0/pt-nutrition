import Link from "next/link";
import Icon from "../components/Icon";
export default function Card({ card: { link, icon, title, body, subtext } }) {
  return (
    <div className="bg-white p-2 mt-6 text-center border w-full md:w-1/3 lg:w-1/3 xl:w-1/4 mx-2 h-1/3 md:h-72 max-w-72 md:rounded-xl flex flex-col items-center justify-center shadow-lg">
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
