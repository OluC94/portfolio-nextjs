import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "@/styles/contact.module.css";

const Contact = () => {
  return (
    <section className={`region ${classes.contact}`} id="contact">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact" />
            <h3>Contact me</h3>
            <p>Feel free to connect with me on LinkedIn.</p>
            <p>You can also find my personal contact details on my CV</p>
            <button className="primary_button">
              <Link href="olu-coker-cv.pdf" target="_blank">
                Download CV
              </Link>
            </button>
          </Col>

          <Col lg="6" md="6">
            <section className={`${classes.contact_info_list}`}>
              <Link
                href="https://www.linkedin.com/in/oluwole-coker-921697144/"
                target="_blank"
              >
                <section className={`${classes.contact_list_item}`}>
                  <span>
                    <i className="ri-linkedin-box-line"></i>
                  </span>
                  <p>LinkedIn</p>
                </section>
              </Link>
              <Link href="https://github.com/OluC94" target="_blank">
                <section className={`${classes.contact_list_item}`}>
                  <span>
                    <i className="ri-github-line"></i>
                  </span>
                  <p>Github</p>
                </section>
              </Link>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
