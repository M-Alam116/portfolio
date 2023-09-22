import { Fragment } from "react";
import Head from "next/head";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Alam - Personal Portfolio</title>
      </Head>
      <Home />
      <About />
      <Services />
    </Fragment>
  );
}
