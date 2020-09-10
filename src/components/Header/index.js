import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./assets/logo.png";
import "./style/index.scss";
import { Link } from "react-router-dom";

class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="header__container">
        <img src={logo} alt="Logo" />
        <input type="text" name="search" placeholder="Use Key words..." />
        <button id="hd-submit" type="submit">
          Search
        </button>
        <Link
          children="Back"
          to={{ pathname: "/job/create", state: { texto: "Back" } }}
        >
          <button>Create Job</button>
        </Link>
      </div>
    );
  }
}

export default index;
