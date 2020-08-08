import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style/index.scss";

class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="card_container">
        <h2>Data Science</h2>
        <section className="card-aspects__container">
          <ul>
            <li>
              <span></span>New York, NY
            </li>
            <li>
              <span></span>Vera Institute of justice 3.2
            </li>
            <li>
              <span></span>$37K-$66K (Glassdoor est.)
            </li>
            <li>
              <span></span>3.2
            </li>
          </ul>
        </section>
        <h5>
          Are you eager to roll up your sleeves and harness data to drive policy
          change? Do you enjoy sifting ...
        </h5>
      </div>
    );
  }
}

export default index;
