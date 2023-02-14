import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "@/styles/aboutMe.module.css";
import ServiceItem from "./ServiceItem";

const AboutMe = () => {
  return (
    <section className="region" id="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <section className={classes.services_container}>
              <section>
                <ServiceItem title="App Development" icon="ri-apps-2-fill" />
                <ServiceItem title="Web Development" icon="ri-window-2-fill" />
              </section>
              <ServiceItem title="Full Stack" icon="ri-code-box-fill" />
            </section>
          </Col>

          <Col lg="6" md="6" className={classes.aboutMe_title}>
            <SectionSubtitle subtitle="About Me" />
            <br />
            <p>
              I graduated from the Northcoders Coding Bootcamp, where I got to
              spend a lot of time with JavaScript, HTML and CSS.
            </p>
            <p>
              Currently specialising in Full Stack Development, I am looking
              forward to learning new languages and technologies.
            </p>
            <p>
              You can find my completed projects in the section below, with more
              on the way soon.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
