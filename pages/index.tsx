import { Inter } from "@next/font/google";
import Hello from "@/components/UI/Hello";
import AboutMe from "@/components/UI/AboutMe";
import { Fragment } from "react";
import Portfolio from "@/components/UI/Portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Hello />
      <AboutMe />
      <Portfolio />
    </Fragment>
  );
}
