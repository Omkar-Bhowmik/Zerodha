import React from "react";

function Hero() {
  return (
    <section className="support-hero py-5">
      <div className="container">
        <p className="mb-2">Support Portal</p>
        <h1>How can we help you?</h1>
        <input
          className="form-control form-control-lg mt-4"
          type="search"
          placeholder="Search for answers"
          aria-label="Search support articles"
        />
      </div>
    </section>
  );
}

export default Hero;
