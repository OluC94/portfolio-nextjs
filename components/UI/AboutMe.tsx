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
            <SectionSubtitle subtitle="What I do/Interests/Whatever" />
            <h3>Stuff</h3>
            <h3>Stuff</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              impedit nulla quos nam, excepturi quisquam quasi nisi corporis
              quae quas voluptate, nobis, iure sint amet maxime laboriosam
              beatae mollitia sed! Libero ullam veritatis sunt qui temporibus
              repellat laboriosam nobis vero.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
