import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/index.scss";
import location from "../Job_cards/assets/location.svg";
import building from "../Job_cards/assets/building.svg";
import money from "../Job_cards/assets/money.svg";
import target from "../Job_cards/assets/target.svg";
import api from "../../ApiUrl";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }
  componentDidMount() {
    const children = this.props.children;
    fetch(api(children)).then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          data: result,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { error, isLoaded } = this.state;
    const { url } = this.state.data;
    if (error) {
      console.log(error.message);
      return <h1>Oops, data no disponible</h1>;
    } else if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="job_container">
          <div>
            <article>
              <h2>Data Science</h2>
              <img src={url} alt="logo" />
            </article>
            <section className="card-aspects__container">
              <ul>
                <li>
                  <span>
                    <img src={location} alt="location" /> New York, NY
                  </span>
                </li>
                <li>
                  <span>
                    <img src={building} alt="building" /> Vera Institute of
                    justice 3.2
                  </span>
                </li>
                <li>
                  <span>
                    <img src={money} alt="money" /> $37K-$66K (Glassdoor est.)
                  </span>
                </li>
                <li>
                  <span>
                    <img src={target} alt="target" /> 3.2
                  </span>
                </li>
              </ul>
            </section>
            <h5>
              Are you eager to roll up your sleeves and harness data to drive
              policy change? Do you enjoy sifting ...
            </h5>
            <section className="buttons">
              <button className="apply">Apply</button>
              <Link className="text-reset text-decoration-none" to={`/job/1`}>
                <button className="back">Back</button>
              </Link>
            </section>
          </div>
        </div>
      );
    }
  }
}

export default index;
