import React from "react";
import classes from "@/styles/serviceItem.module.css";

interface ServiceProps {
  title: string;
  icon: string;
}

const ServiceItem = (props: ServiceProps) => {
  const { title, icon } = props;
  return (
    <section className={`${classes.service_item}`}>
      <span>
        <i className={icon}></i>
      </span>
      <h6>{title}</h6>
    </section>
  );
};

export default ServiceItem;
