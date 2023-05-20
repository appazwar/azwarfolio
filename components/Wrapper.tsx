import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Wrapper({ children }) {
  return (
    <>
      {" "}
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="m-auto ">{children}</div>
      <div>
       <Footer/>
      </div>
    </>
  );
}
