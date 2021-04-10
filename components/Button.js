export default function Button({
  color = "green",
  rounded = true,
  children = "Button Text",
  type,
  onClick,
}) {
  rounded == true ? "rounded" : null;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-${color}-400 hover:bg-${color}-300 text-xs px-3 py-2 ${rounded} text-white cursor-pointer`}
    >
      {children}
    </button>
  );
}
