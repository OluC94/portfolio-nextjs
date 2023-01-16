import React, { FC, Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface Props {
  children: any;
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <section>{props.children}</section>
      <Footer />
    </Fragment>
  );
};

export default Layout;
