import { useState } from "react";

import "./App.css";

function Planets() {
  return (
    <>
      <section id="next-steps">
        <section id="center">
          <div>
            <h1>Planets</h1>
          </div>
          <button type="button" className="counter">
            Show all Planets
          </button>

          <p>Planets</p>
        </section>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default Planets;
