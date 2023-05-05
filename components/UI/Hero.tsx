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
                <SectionSubtitle subtitle="Welcome" />
                <h2 className="mt-3 mb-3">I&apos;m Olu Coker</h2>
                <h5 className="mb-4">Junior Full Stack Developer</h5>
                <p>
                  I am a Junior Full Stack Developer looking for an exciting new
                  role.
                </p>
                <p>
                  With a development background in creating web applications, I
                  am interested in learning as much about software development
                  as possible.
                </p>
                <section className="mt-5">
                  <button className="primary_button">
                    <Link href="olu-coker-cv.pdf" target="_blank">
                      Download CV
                    </Link>
                  </button>
                  <button className="secondary_button">
                    <Link href="https://github.com/OluC94" target="_blank">
                      <i className="ri-github-line"></i> My Github
                    </Link>
                  </button>
                </section>
              </section>
            </Col>
            <Col lg="6" md="6">
              <section className={`${classes.hero_skills}`}>
                <Image
                  className={`${classes.tech_logo}`}
                  alt="React logo"
                  src="/images/react.png"
                  width="150"
                  height="150"
                />
                <section>
                  <section>
                    <Link
                      href="https://www.credly.com/badges/1314bfd4-50aa-4d63-ba66-b364d7f47c30/public_url"
                      target="_blank"
                    >
                      <Image
                        className={`${classes.tech_logo}`}
                        alt="Certified in cybersecurity badge"
                        src="/images/badge-cc.png"
                        width="150"
                        height="150"
                      />
                    </Link>
                  </section>
                  <Image
                    className={`${classes.tech_logo}`}
                    alt="SQL logo"
                    src="/images/sql-logo.png"
                    width="250"
                    height="200"
                  />
                </section>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Hero;
