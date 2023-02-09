import React, { useRef, useEffect, useState, MutableRefObject } from "react";
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
  const menuRef = useRef<HTMLSelectElement>(null);

  const logoLeft: string = "<";
  const logoRight: string = "/>";

  const toggleMenu = () => {
    if (!menuRef) return null;
    return menuRef.current.classList.toggle(`${classes.menu_active}`);
  };

  //   const headerRef = useRef(null);

  // const headerFunc = () => {
  //   if (
  //     document.body.scrollTop > 600 ||
  //     document.documentElement.scrollTop > 600
  //   ) {
  //     headerRef.current.classList.add(`${classes.header_shrink}`);
  //     // console.log(window.scrollY);
  //   } else {
  //     headerRef.current.classList.remove(`${classes.header_shrink}`);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", headerFunc);

  //   return () => window.removeEventListener("scroll", headerFunc);
  // }, []);

  // console.log(window.scrollY);

  return (
    <header className={`${classes.header}`}>
      <Container className={`${classes.header_container}`}>
        <section className={`${classes.nav_wrapper}`}>
          <section className={`${classes.logo}`}>
            <h1>
              <span>{logoLeft}</span>
              {logoRight}
            </h1>
          </section>

          <section
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <section className={`${classes.nav_menu}`}>
              {navLink.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <section className={`${classes.nav_right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  <Link href={"https://github.com/OluC94"} target="_blank">
                    <i className="ri-github-line"></i>
                  </Link>
                </p>
              </section>
            </section>
          </section>

          <span className={`${classes.mobile_menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </section>
      </Container>
    </header>
  );
};

export default Header;
