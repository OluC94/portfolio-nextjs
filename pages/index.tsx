import { Inter } from "@next/font/google";
import Hero from "@/components/UI/Hero";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}
