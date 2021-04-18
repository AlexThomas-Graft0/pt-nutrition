export default function Header({ heading, background, children, classes }) {
  background = background ? `bg-${background}` : null;
  console.log(background);
  return (
    <div
      className={`h-96 bg-cover bg-center flex flex-col justify-center items-center text-center ${classes} bg-header-image`}
    >
      <h1 className="text-5xl font-bold">{heading}</h1>
      <div className="mt-3 text-2xl w-1/2">{children}</div>
    </div>
  );
}
