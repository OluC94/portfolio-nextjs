import React, { FC } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
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
    path: "#portfoflio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg="6">
            <section className={`${classes.nav_menu}`}>
              {navLink.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </section>
          </Col>

          <Col lg="6">
            <section className={`${classes.footer_creator}`}>
              <h6>Created by Olu Coker</h6>
            </section>
          </Col>

          <Col lg="12">
            <section className={`${classes.footer_copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Olu Coker. All rights
                reserved.{" "}
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
