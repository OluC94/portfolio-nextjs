import React from "react";
import classes from "@/styles/subtitle.module.css";

interface Subtitle {
  subtitle: string;
}

const SectionSubtitle = (props: Subtitle) => {
  return <h2 className={`${classes.section_subtitle}`}>{props.subtitle}</h2>;
};

export default SectionSubtitle;
