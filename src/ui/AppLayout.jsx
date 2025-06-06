import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

export default function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

<div className="overflow-auto">
      <main className="mx-auto max-w-3xl p-4">
        <Outlet />
      </main>
      </div>

      <CartOverview />
      
    </div>
  );
}
