import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Sidebar from "../SideBar";
import Cards from "../Job_cards";

class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body__container">
          <Sidebar />
          <section className="cards__cont">
            <Cards children="oro" />
            <Cards children="maths" />
          </section>
        </div>
      </div>
    );
  }
}

export default index;
