"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pb-[72px]">
        <Header />
        <div className="lg:px-40 sm:px-10 my-6">{children}</div>
      </div>
      <Footer />
    </>
  );
}
