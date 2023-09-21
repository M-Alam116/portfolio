import { Fragment } from "react";
import Head from "next/head";
import Home from "@/components/Home";
import About from "@/components/About";
export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Alam's Portfolio</title>
      </Head>
      <Home />
      <About />
    </Fragment>
  );
}
