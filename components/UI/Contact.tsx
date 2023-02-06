import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "@/styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section className={`region ${classes.contact}`} id="contact">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact" />
            <h3>Contact me</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nemo
              dignissimos earum, libero tempora sapiente in autem corporis
              quisquam, ea eum deleniti qui, porro nobis quas fugiat est quos
              asperiores. Voluptates maxime commodi saepe qui eligendi
              necessitatibus dolorum omnis? Itaque.
            </p>

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

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
