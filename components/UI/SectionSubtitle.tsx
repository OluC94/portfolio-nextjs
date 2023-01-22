import React from "react";
import classes from "@/styles/subtitle.module.css";

const SectionSubtitle = (props: any) => {
  return <h2 className={`${classes.section_subtitle}`}>{props.subtitle}</h2>;
};

export default SectionSubtitle;
