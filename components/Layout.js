import Head from "next/head";

export default function Layout({ children, title, banner }) {
  //bring banner in?
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {banner}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="w-full flex flex-col space-y-3 items-center justify-center flex-1 container">
          {children}
        </main>
      </div>
    </>
  );
}
