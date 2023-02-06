import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";

type NavItem = {
  path: string;
  display: string;
};

const navLink: NavItem[] = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About Me",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  // const headerRef = useRef(null);

  // const headerFunc = () => {
  //   if (
  //     document.body.scrollTop > 80 ||
  //     document.documentElement.scrollTop > 80
  //   ) {
  //     headerRef.current.classList.add(`${classes.header_shrink}`);
  //   } else {
  //     headerRef.current.classList.remove(`${classes.header_shrink}`);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", headerFunc);

  //   return () => window.removeEventListener("scroll", headerFunc);
  // }, []);

  // add ref={headerRef} to header comp

  return (
    <header className={`${classes.header}`}>
      <Container>
        <section className={`${classes.nav_wrapper}`}>
          <section className={`${classes.logo}`}>
            <h1>
              <span>My </span>Name
            </h1>
          </section>

          <section className={`${classes.navigation}`}>
            <section className={`${classes.nav_menu}`}>
              {navLink.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <section className={`${classes.nav_right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  <i className="ri-github-line"></i>Site repo
                </p>
              </section>
            </section>
          </section>
        </section>
      </Container>
    </header>
  );
};

export default Header;
