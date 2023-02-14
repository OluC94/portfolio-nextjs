import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "@/styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../data/portfolio";

const Portfolio = () => {
  return (
    <section className="region" id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Portfolio" />
            <h4 className="mt-4">My personal projects</h4>
          </Col>

          <Col lg="6" md="6">
            <section className={`${classes.tab_button} text-end`}></section>
          </Col>

          {portfolioData?.map((item) => {
            return (
              <Col lg="4" md="4" sm="6" key={item.id}>
                <PortfolioItem item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
