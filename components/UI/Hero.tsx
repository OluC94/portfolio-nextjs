import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import classes from "@/styles/hero.module.css";

const Hero = () => {
  return (
    <section className="region">
      <section className={`${classes.hero}`}>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <section className={`${classes.hero_content}`}>
                <SectionSubtitle subtitle="Hello" />
                <h2 className="mt-3 mb-3">I'm Olu Coker</h2>
                <h5 className="mb-4">Full Stack Developer</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, odit nam?
                </p>
                <section className="mt-5">
                  <button className="primary_button">
                    <Link href="#">Hire me</Link>
                  </button>
                  <button className="secondary_button">
                    <Link href="#">Download CV</Link>
                  </button>
                </section>
              </section>
            </Col>
            <Col lg="6" md="6"></Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Hero;
