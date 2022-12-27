import React from "react";
import PlanItem from "../plan-item/PlanItem";
import "./Plan.css";

function PLan() {
  return (
    <section className="plan">
      <div className="container">
        <h2 className="plan__title">Get the right plan for future</h2>
        <div className="container--flex">
          <PlanItem
            type="Starter"
            price="Free"
            isSpan="false"
            websites="1"
            gb="5"
            support="Limited"
          />
          <PlanItem
            type="Premium"
            price="$29/"
            isSpan="true"
            websites="10"
            gb="15"
            support="Premium"
          />
          <PlanItem
            type="Enterprise"
            price="$49/"
            isSpan="true"
            websites="Unlimited"
            gb="50"
            support="Premium"
          />
        </div>
      </div>
    </section>
  );
}

export default PLan;
