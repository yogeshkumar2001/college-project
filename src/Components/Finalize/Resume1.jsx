import React, { Component } from "react";
import "./resume1.css";
class Resume1 extends React.Component {
  state = {
    finalDetails: {
      contactDetails: {},
      educationDetails: {},
      experienceDetails: {},
      skills: "",
      about: {},
      // skinId:""
    },
  };
  componentDidMount() {
    let lcexperienceDetails = JSON.parse(
      window.localStorage.getItem("experienceDetails")
    );
    let lceducationDetails = JSON.parse(
      window.localStorage.getItem("educationDetails")
    );
    let lccontactDetails = JSON.parse(
      window.localStorage.getItem("contactDetails")
    );
    let lcskills = JSON.parse(localStorage.getItem("skills"));
    let lcabout= JSON.parse(window.localStorage.getItem("about"));
    let oldfinalDetails = this.state.finalDetails;
    this.setState({
      finalDetails: {
        ...oldfinalDetails,
        experienceDetails: lcexperienceDetails,
        educationDetails: lceducationDetails,
        contactDetails: lccontactDetails,
        about:lcabout,
        skills: lcskills,
      },
    });
  }
  render() {
    let CDetails = this.state.finalDetails.contactDetails;
    let edu = this.state.finalDetails.educationDetails;
    let ED = this.state.finalDetails.experienceDetails;
    return (
      <div className="Resume-container" ref={this.props.refProp}>
        <div className="your-name">
          <h1>
            {CDetails.fname}
            {CDetails.lname}
          </h1>
        </div>
        <div className="objective">
          <h4>OBJECTIVE</h4>
          <hr />
          {CDetails.summary}
        </div>

        <div className="experience">
          <h4>Experience</h4>
          <div className="exp-border">
            <hr />
            <h3>{ED.jobTitle}</h3>
            <h4>{ED.companyName}</h4>
            <h5>{ED.position}</h5>
            <h6>{ED.city}</h6>
            <p>{ED.aboutCompany}</p>
            <div className="dates">
              <p> Start Date {ED.startDate} </p>
              <p> End Date {ED.endDate} </p>
            </div>
            <hr />
          </div>
          <div className="edu">
            <h4>Education</h4>
            <hr />
            <div className="edu-detail">
              <h4>{edu.degree}</h4>
              <h5>{edu.field}</h5>
              <div className="dates">
                <p>Graduation Start Date {edu.gStartDate}</p>
                <p>Graduation End Date {edu.gEndDate}</p>
              </div>

              <table>
                <tr>
                  <th>Name</th>
                  <th>CGPA</th>
                  <th>Location</th>
                </tr>
                <tr>
                  <td>{edu.schoolName}</td>
                  <td>{edu.schoolCpga}</td>
                  <td>{edu.schoolLocation}</td>
                </tr>
                <tr>
                  <td>{edu.collegeName}</td>
                  <td>{edu.collegeCpga}</td>
                  <td>{edu.collegeLocation}</td>
                </tr>
              </table>
            </div>
            <div className="contact">
              <h4>Contacts</h4>
              <hr />
              <div className="cn">
                <div className="vl">
                  <h6>profession : {CDetails.profession}</h6>
                </div>
                <div className="vl">
                  <h6>email : {CDetails.email}</h6>
                </div>
                <div className="vl">
                  <h6>Phone : {CDetails.phone}</h6>
                </div>
              </div>
              <div className="cn">
                <div className="vl">
                  <h6>City : {CDetails.city}</h6>
                </div>
                <div className="vl">
                  <h6>State : {CDetails.state}</h6>
                </div>
                <div className="vl">
                  <h6>Pin : {CDetails.pin}</h6>
                </div>
              </div>
            </div>
            <div className="contact">
              <h4>About</h4>
              <hr />
              <div className="">
                <div className="">
                  <h6>Skills : {this.state.finalDetails.skills}</h6>
                </div>
                <div className="">
                  <h6>Skills : {this.state.finalDetails.about.achievement}</h6>
                </div>
                <div className="">
                  <h6>Skills : {this.state.finalDetails.about.hobbies}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume1;
