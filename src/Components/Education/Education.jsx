import React, { Component } from "react";
import { Link } from "react-router-dom";
class Education extends React.Component {
  state = {
    educationDetails: {
      schoolName: "",
      schoolLocation: "",
      collegeName: "",
      collegeLocation: "",
      degree: "",
      field: "",
      schoolCgpa: "",
      collegeCgpa: "",
      gStartDate: "",
      gEndDate: ""
    },
    skinPath: ""
  }
  onChangeHandler = (e) => {
    // console.log(contactCodes);
    let id = e.target.id;
    let value = e.target.value;
    let oldeducationDetails = this.state.educationDetails;
    this.setState({
      educationDetails: {
        ...oldeducationDetails,
        [id]: value
      }
    });
  };
  backButtonHandler = () => {
    console.log("back button clicked !!");
  };
  nextButtonHandler = () => {
    console.log("next button clicked !!");
    
    let oldeducationDetails = this.state.educationDetails ;
    localStorage.setItem(
      "educationDetails",
      JSON.stringify(oldeducationDetails)
    );
  };
  componentDidMount() {
    let skinPath = JSON.parse(localStorage.getItem("skinPath"));
    console.log("skinId=>>>" + skinPath);
    this.setState({
      skinPath: skinPath,
    });
    let userEducationDetails = JSON.parse(localStorage.getItem("educationDetails"));
    // console.log(userEducationDetails);
    if (userEducationDetails) {
      // console.log("bcfihhewbvdfchuwechuvewc");
      this.setState({
        educationDetails: {
          ...userEducationDetails,
        }
      });
      let schoolName = document.getElementById("schoolName");
      schoolName.value = userEducationDetails.schoolName;

      let schoolLocation = document.getElementById("schoolLocation");
      schoolLocation.value = userEducationDetails.schoolLocation;

      let collegeName = document.getElementById("collegeName");
      collegeName.value = userEducationDetails.collegeName;

      let collegeLocation = document.getElementById("collegeLocation");
      collegeLocation.value = userEducationDetails.collegeLocation;

      let degree = document.getElementById("degree");
      degree.value = userEducationDetails.degree;

      let field = document.getElementById("field");
      field.value = userEducationDetails.field;

      let schoolCgpa = document.getElementById("schoolCgpa");
      schoolCgpa.value = userEducationDetails.schoolCgpa;

      let collegeCgpa = document.getElementById("collegeCgpa");
      collegeCgpa.value = userEducationDetails.collegeCgpa

      let gStartDate = document.getElementById("gStartDate");
      gStartDate.value = userEducationDetails.gStartDate;

      let gEndDate = document.getElementById("gEndDate");
      gEndDate.value = userEducationDetails.gEndDate;
    }
  }
  render() {
    return (
      <div className="contact-details-container">
        <div className="contact-form">
          <div className="headings">
            <h3>Tell us about your education.</h3>
            <h5>
              Include every school, even if you're still there or didn't
              graduate...
            </h5>
          </div>
          <div className="form-container">
            <div className="form">
              <div className="details">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    required="required"
                    class="form-control"
                    id="schoolName"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">School Name</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="schoolLocation"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">School Location </label>
                </div>
              </div>
              {/* ///// */}
              <div className="details">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="collegeName"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">College Name</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    required="required"
                    class="form-control"
                    id="collegeLocation"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">College Location</label>
                </div>
              </div>
              {/* /// */}
              <div className="details">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="degree"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Degree</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    required="required"
                    class="form-control"
                    id="field"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Field of Study</label>
                </div>
              </div>
              {/* /////////////// */}
              <div className="details">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="schoolCgpa"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">CGPA/Percentage In School</label>
                </div>

                <div class="form-floating mb-3 ">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="collegeCgpa"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">CGPA/Percentage In College</label>
                </div>
              </div>
              {/* {///////////} */}
              <div className="details">
                <div class="form-floating mb-3">
                  <input
                    type="date"
                    required="required"
                    class="form-control"
                    id="gStartDate"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Graduation Start Date</label>
                </div>

                <div class="form-floating mb-3 ">
                  <input
                    type="date"
                    required="required"
                    class="form-control"
                    id="gEndDate"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Graduation End Date</label>
                </div>
              </div>
              {/* //////////// */}
            </div>
          </div>
          <div className="btn-conatiner">
            <Link to="/contact">
              <div className="btn1">Back</div>
            </Link>
            <Link to="/exp">
              <div className="btn1" onClick={this.nextButtonHandler}>Next</div>
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

export default Education;
