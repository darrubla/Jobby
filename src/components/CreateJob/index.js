import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/index.scss";

class index extends Component {
  render(props) {
    return (
      <div className="view-container">
        <div className="form-container">
          <div className="form-content">
            <form>
              <h2>Create Vacancy</h2>
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="job-title"
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location..."
                  id="job-location"
                />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name..."
                  id="job-company"
                />
              </div>
              <div className="form-group">
                <label>Salary Rank</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$37K-$66K (Glassdoor est.)"
                  id="job-salary"
                />
              </div>
              <div className="form-group">
                <label>Ratio (0-10)</label>
                <input
                  type="number"
                  className="form-control"
                  min="0"
                  max="10"
                  id="ratio"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Job Description..."
                  id="job-description"
                />
              </div>
              <div className="buttons-container">
                <Link to={`/job/:jobId`}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    id="create-job-btn"
                  >
                    Create
                  </button>
                </Link>
                <Link to="/home">
                  <button>{this.props.location.state.texto}</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
