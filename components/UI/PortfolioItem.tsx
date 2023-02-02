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
  item: PortfolioData;
}

const PortfolioItem = (props: Props) => {
  const { title, feRepoUrl, beRepoUrl, liveUrl, keyword, summary, techStack } =
    props.item;

  return (
    <section className={`${classes.portfolio_item}`}>
      <section className="bg-transparent">
        <h6>{title}</h6>
        {/* {keyword.map((item: string, index: number) => {
          return (
            <span className={`${classes.portfolio_keyword}`} key={index}>
              {item}
            </span>
          );
        })} */}

        <section className={`${classes.portfolio_summary}`}>{summary}</section>

        <section className={`${classes.portfolio_techStack_container}`}>
          {techStack.map((item: string, index: number) => {
            return (
              <span className={`${classes.portfolio_techStack}`} key={index}>
                {item}
              </span>
            );
          })}
        </section>
      </section>

      <section className={`${classes.portfolio_link_container}`}>
        <section className={`${classes.portfolio_link}`}>
          <button className="primary_button">
            <Link href={liveUrl} target="_blank">
              Launch
            </Link>
          </button>
        </section>

        {feRepoUrl.length > 0 ? (
          <section className={`${classes.portfolio_link}`}>
            <button className="primary_button">
              <Link href={feRepoUrl} target="_blank">
                {beRepoUrl.length > 0 ? "Front End Repo" : "Github Repo"}
              </Link>
            </button>
          </section>
        ) : null}

        {beRepoUrl.length > 0 ? (
          <section className={`${classes.portfolio_link}`}>
            <button className="primary_button">
              <Link href={beRepoUrl} target="_blank">
                {feRepoUrl.length > 0 ? "Back End Repo" : "Github Repo"}
              </Link>
            </button>
          </section>
        ) : null}
      </section>
    </section>
  );
};

export default PortfolioItem;
