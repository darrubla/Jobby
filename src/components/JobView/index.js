import React, { Component } from "react";
import Header from "../Header";
import JobDetails from "../Job_detail";

class index extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body__cont">
          <JobDetails />
        </div>
      </div>
    );
  }
}

export default index;
