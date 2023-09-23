import { Fragment } from "react";
import Head from "next/head";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Portfolio from "@/components/Portfolio";
import Review from "@/components/Review";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Alam - Personal Portfolio</title>
      </Head>
      <Home />
      <About />
      <Services />
      <Skill />
      <Resume />
      <Portfolio />
      <Review />
      <Contact />
    </Fragment>
  );
}
