import React from "react";
import classes from "@/styles/portfolioItem.module.css";
import Link from "next/link";

interface PortfolioData {
  id: string;
  title: string;
  category: string;
  summary: string;
  techStack: string[];
  keyword: string[];
  liveUrl: string;
  feRepoUrl: string;
  beRepoUrl: string;
}

interface Props {
  item: {}; // props: Props, where Props is item object w/ type PortfolioData
}

const PortfolioItem = (props: PortfolioData) => {
  const { title, feRepoUrl, liveUrl, keyword } = props.item;

  return (
    <section className={`${classes.portfolio_item}`}>
      <section>
        <h6>{title}</h6>
        {keyword.map((item: string, index: number) => {
          return (
            <span className={`${classes.portfolio_keyword}`} key={index}>
              {item}
            </span>
          );
        })}
      </section>

      <section className={`${classes.portfolio_repoUrl}`}>
        <button className="primary_button">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </section>

      <section className={`${classes.portfolio_repoUrl}`}>
        <button className="primary_button">
          <Link href={feRepoUrl}>Github Repo</Link>
        </button>
      </section>
    </section>
  );
};

export default PortfolioItem;
