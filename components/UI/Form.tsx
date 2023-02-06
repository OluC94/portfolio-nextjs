import React from "react";
import classes from "@/styles/form.module.css";

const Form = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className={`${classes.form}`}>
      <section className={`${classes.form_group}`}>
        <input type="text" placeholder="Your name" required />
      </section>
      <section className={`${classes.form_group}`}>
        <input type="email" placeholder="Email address" required />
      </section>
      <section className={`${classes.form_group}`}>
        <textarea rows={5} placeholder="Message" required />
      </section>

      <button className="primary_button" type="submit" onSubmit={handleSubmit}>
        Send
      </button>
    </form>
  );
};

export default Form;
