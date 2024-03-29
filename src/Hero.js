import React from "react";
import PhoneImg from "../src/images/phone.svg";
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments Infrastructure for Internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={PhoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
