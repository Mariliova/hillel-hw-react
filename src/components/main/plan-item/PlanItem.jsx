import React from "react";
import Button from "../../button/Button";
import "./PlanItem.css";

function PlanItem({ type, price, isSpan, websites, gb, support }) {
  const span = () => {
    if (!isSpan) {
      return "";
    }
    return <span class="item__title-span">month</span>;
  };
  return (
    <div className="item">
      <p className="item__text">
        {type}
        {span}
      </p>
      <h3 className="item__title">{price}</h3>
      <ul>
        <li className="item__li">{websites} Website</li>
        <li className="item__li">{gb} GB Hosting</li>
        <li className="item__li">{support} Support</li>
      </ul>
      <Button className="button--item" text="Get Started" />
    </div>
  );
}
export default PlanItem;
