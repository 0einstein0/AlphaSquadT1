import React from "react";
import { Link } from "react-router-dom";

function NavigBar({ ...otherProps }) {
  return (
    <div
      {...otherProps}
      class=" px-16 py-7 self-center grid grid-flow-col auto-cols-max gap-4"
    >
      <nav>
        <ul class="grid grid-flow-col gap-8">
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/CaseStudies">Case Studies</Link>
          </li>
          <li>
            <Link to="/CaseStudiesInner">FAQ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigBar;
