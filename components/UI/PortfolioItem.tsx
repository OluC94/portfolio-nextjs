import React from "react";
import classes from "@/styles/portfolioItem.module.css";
import Link from "next/link";

interface PortfolioItemProps {
  title: string;
  repoURL: string;
  liveURL: string;
  keyword?: string[] | undefined;
}

const PortfolioItem = (props: PortfolioItemProps) => {
  const { title, repoURL, liveURL, keyword } = props;
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
          <Link href={liveURL}>Launch</Link>
        </button>
      </section>

      <section className={`${classes.portfolio_repoUrl}`}>
        <button className="primary_button">
          <Link href={repoURL}>Github Repo</Link>
        </button>
      </section>
    </section>
  );
};

export default PortfolioItem;
