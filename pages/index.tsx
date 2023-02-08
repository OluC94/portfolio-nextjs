import { Inter } from "@next/font/google";
import Hero from "@/components/UI/Hero";
import AboutMe from "@/components/UI/AboutMe";
import { Fragment } from "react";
import Portfolio from "@/components/UI/Portfolio";
import Contact from "@/components/UI/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
