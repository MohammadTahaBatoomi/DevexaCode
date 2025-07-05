import Image from "next/image";
import { Fragment } from "react";

import Header from "@/components/landing/Header";
import SearchEngin from "@/components/landing/Search-Engin";
import Language from "@/components/landing/Language";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <Fragment>
        <Header />
        <SearchEngin />
        <Language />
        <Footer />
    </Fragment>
  );
}
