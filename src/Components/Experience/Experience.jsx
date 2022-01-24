import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Experience.css";
class Experience extends React.Component {
  state = {
    experienceDetails: {
      jobTitle: "",
      position: "",
      city: "",
      state: "",
      companyName: "",
      aboutCompany: "",
      startDate: "",
      endDate: "",
    },
    skinPath: "",
  };
  onChangeHandler = (e) => {
    // console.log(contactCodes);
    let id = e.target.id;
    let value = e.target.value;
    let oldexperienceDetails = this.state.experienceDetails;
    this.setState({
      experienceDetails: {
        ...oldexperienceDetails,
        [id]: value
      }
    });
  };

  nextButtonHandler = () => {
    console.log("next button clicked !!");

    let oldExpDetails = this.state.experienceDetails;
    localStorage.setItem(
      "experienceDetails",
      JSON.stringify(oldExpDetails)
    );
  };
  componentDidMount() {
    let skinPath = JSON.parse(localStorage.getItem("skinPath"));
    console.log("skinId=>>>" + skinPath);
    this.setState({
      skinPath: skinPath,
    });
    let userExperienceDetails = JSON.parse(localStorage.getItem("experienceDetails"));
    // console.log(userExperienceDetails);
    if (userExperienceDetails) {
      // console.log("bcfihhewbvdfchuwechuvewc");
      this.setState({
        experienceDetails: {
          ...userExperienceDetails,
        }
      });
      let cityName = document.getElementById("city");
      cityName.value = userExperienceDetails.city; 
      let jobTitleName = document.getElementById("jobTitle");
      jobTitleName.value = userExperienceDetails.jobTitle;

      let positionName = document.getElementById("position");
      positionName.value = userExperienceDetails.position;
      let stateName = document.getElementById("state");
      stateName.value = userExperienceDetails.state;

      let companyName = document.getElementById("companyName");
      companyName.value = userExperienceDetails.companyName;

      let aboutCompany = document.getElementById("aboutCompany");
      aboutCompany.value = userExperienceDetails.aboutCompany;

      let startDate = document.getElementById("startDate");
      startDate.value = userExperienceDetails.startDate;

      let endDate = document.getElementById("endDate");
      endDate.value = userExperienceDetails.endDate;
    }
  }
  render() {
    return (
      <div className="contact-details-container">
        <div className="contact-form">
          <div className="headings">
            <h3>Tell us about your most recent job.</h3>
            <h5>We’ll start there and work backward..</h5>
          </div>
          <div className="form-container">
            <div className="form">
              <div className="details-exp">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    required="required"
                    class="form-control"
                    id="jobTitle"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Job Title</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="position"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Position</label>
                </div>
              </div>
              {/* ///// */}
              <div className="details-exp">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="city"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">City</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    required="required"
                    class="form-control"
                    id="state"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">State</label>
                </div>
              </div>
              {/* /// */}
              <div className="details-exp">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="companyName"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Company Name</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    required="required"
                    class="form-control"
                    id="aboutCompany"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">About Company</label>
                </div>
              </div>
              {/* {///////////} */}
              <div className="details-exp">
                <div class="form-floating mb-3">
                  <input
                    type="date"
                    required="required"
                    class="form-control"
                    id="startDate"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Start Date</label>
                </div>

                <div class="form-floating mb-3 ">
                  <input
                    type="date"
                    required="required"
                    class="form-control"
                    id="endDate"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">End Date</label>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-conatiner">
            <Link to="/edu">
              <div className="btn1">Back</div>
            </Link>
            <Link to="skills">
              <div className="btn1" onClick={this.nextButtonHandler}>
                Next
              </div>
            </Link>
          </div>
        </div>
        <div className="skin-image">
          <div className="skin-img-container">
            <img src={this.state.skinPath} alt="" />
          </div>
          {/* <div className="btn"></div> */}
        </div>
      </div>
    );
  }
}

export default Experience;
