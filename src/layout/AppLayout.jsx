import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <Header />  {/* Fixed component  */ }
      <Outlet />  {/* Replaced with specific children like Home or contact page */}
      <Footer />  {/* Fixed component  */ }
    </>
  );
}
