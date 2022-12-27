import React from "react";
import man from "../../../images/firstman.png";
import Button from "../../button/Button";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="container container--flex">
        <div>
          <h1 className="about__title">Grow your subscription business</h1>
          <p className="about__description">
            Outcome-centered products that reduce churn, optimize pricing, and
            grow your subscription business end-to-end.
          </p>
          <div className="button__wrap">
            <Button text="Get Started" className="button--blue" />
            <Button text="Try" className="button--white" />
          </div>
        </div>
        <img src={man} alt="firstman" />
      </div>
    </section>
  );
}

export default About;
