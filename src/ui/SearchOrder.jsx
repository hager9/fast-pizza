import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search an Order.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-rose-100 rounded-full px-4 py-2 text-sm placeholder:text-stone-400 sm:focus:w-72 transition-all duration-300 sm:w-64 focus:outline-none focus:ring-rose-500 focus:ring-opacity-50 text-stone-800"
        />
      </form>
    </div>
  );
}
