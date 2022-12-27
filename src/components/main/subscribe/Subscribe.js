import React from "react";
import man from "../../../images/secondman.png";
import Button from "../../button/Button";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section class="subscribe">
      <div class="container container--flex">
        <img src={man} alt="secondman" />
        <div>
          <h2 class="subscribe__title">Subscription index</h2>
          <form>
            <input class="subscribe__input" type="email" placeholder="Email" />
            <Button text="Try" className="button--blue" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
