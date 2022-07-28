export default function Button({ type, label }) {
  if (type === "primary") {
    return (
      <button className="bg-revire-primary text-white rounded-full px-8 py-2 cursor-pointer hover:bg-transparent hover:text-revire-primary border-2 hover:border-revire-primary transition-all">
        {label}
      </button>
    );
  }
  return (
    <button className="border-2 border-revire-primary bg-transparent hover:bg-revire-primary text-revire-primary hover:text-white rounded-full px-8 py-2 cursor-pointer transition-all">
      {label}
    </button>
  );
}
