export default function Header({
  background,
  children,
  textColor = "gray",
  textShade = "50",
}) {
  return (
    <div
      className={`h-96 bg-${background} bg-cover bg-center flex flex-col justify-center items-center text-${textColor}-${textShade} text-center`}
    >
      <h1 className="text-5xl font-bold">{children}</h1>
    </div>
  );
}
