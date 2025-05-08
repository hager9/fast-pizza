import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  
  return (
    <header className="bg-rose-700 font-semibold uppercase
     text-stone-200 px-4 py-3 border-b border-stone-200
     flex items-center justify-between
     sm:px-6 gap-2">
      <Link to="/" className="tracking-widest sm:text-xl">fast pizza</Link>

      <SearchOrder />
      <UserName/>
    </header>
  );
}
