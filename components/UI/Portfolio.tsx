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
            <SectionSubtitle subtitle="My portfolio" />
            <h4 className="mt-4">My portfolio</h4>
          </Col>

          <Col lg="6" md="6">
            <section className="text-end">
              <button
                className={`${classes.tab_button_active} secondary_button text-black`}
              >
                NC Games
              </button>
              <button className={`secondary_button text-black`}>
                Reel Impact
              </button>
            </section>
          </Col>

          {portfolioData.map((item) => {
            return (
              <Col lg="4" md="4" key={item.id}>
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
