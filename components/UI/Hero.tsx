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
                <h5 className="mb-4">Junior Full Stack Developer</h5>
                <p>
                  Intro About me, northcoders gradiate looing for junior dev
                  roles
                </p>
                <section className="mt-5">
                  <button className="primary_button">
                    <Link href="olu-coker-2023.pdf" target="_blank" download>
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
                  <Image
                    className={`${classes.tech_logo}`}
                    alt="NodeJS logo"
                    src="/images/node3d.png"
                    width="150"
                    height="150"
                  />
                  <Image
                    className={`${classes.tech_logo}`}
                    alt="SQL logo"
                    src="/images/sql-logo.png"
                    width="200"
                    height="200"
                  />
                </section>
              </section>

              {/* <section
                className={`${classes.hero_experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <h5>Experience</h5>
                <h6>Junior </h6>
              </section> */}
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Hero;
