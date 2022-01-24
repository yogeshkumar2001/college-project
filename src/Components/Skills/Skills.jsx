import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Skills.css";
class Skills extends React.Component {
  state = {
    skills: "",
    skinPath: "",
  };
  onChangeHandler = (e) => {
    // console.log(contactCodes);
    let id = e.target.id;
    let value = e.target.value;
    this.setState({
      skills: value,
    });
  };
  nextButtonHandler = () => {
    console.log("next button clicked !!");

    let oldSkillsDetails = this.state.skills;
    localStorage.setItem(
      "skills",
      JSON.stringify(oldSkillsDetails)
    );
  };
  componentDidMount() {
    let skinPath = JSON.parse(localStorage.getItem("skinPath"));
    console.log("skinId=>>>" + skinPath);
    this.setState({
      skinPath: skinPath,
    });
    let skillsDetails = localStorage.getItem("skills");
    // console.log(userEducationDetails);
    console.log(skillsDetails);
    if (skillsDetails) {
      // console.log("bcfihhewbvdfchuwechuvewc");
      this.setState({
        skills: skillsDetails
      });
      let skillInput = document.getElementById("skills");
      skillInput.value = JSON.parse(skillsDetails);
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
          <div className="skill-form-container">
            <div className="skill-form">
              <div className="skill-details">
                <div class="form-floating mb-3 skill">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="skills"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Write About your skills</label>
                </div>

                {/* <div class="form-floating mb-3">
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
                </div> */}
              </div>
              {/* ///// */}
            </div>
          </div>
          <div className="btn-conatiner">
            <Link to="/skills">
              <div className="btn1">Back</div>
            </Link>
            <Link to="/about">
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

export default Skills;
