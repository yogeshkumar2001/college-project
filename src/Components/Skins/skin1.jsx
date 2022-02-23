import React, { Component } from "react";
import "./skin1.css";
class  Skin1 extends Component {
  state = {
    finalDetails: {
      contactDetails: {},
      educationDetails: {},
      experienceDetails: {},
      skills: "",
      about: {},
      skillsArr:[]
      // skinId:""
    },
  };
  componentDidMount() {
   console.log("cmd of Resume1");
    let lcexperienceDetails = JSON.parse(
      window.localStorage.getItem("experienceDetails")
    );
    let lceducationDetails = JSON.parse(
      window.localStorage.getItem("educationDetails")
    );
    let lccontactDetails = JSON.parse(
      window.localStorage.getItem("contactDetails")
    );
    let lcskills = window.localStorage.getItem("skills");
    let lcabout= JSON.parse(window.localStorage.getItem("about"));
    // let experienceDetails = JSON.parse(window.localStorage.getItem("experienceDetails"));
    // console.log(experienceDetails);
    let oldfinalDetails = this.state.finalDetails;
    console.log(this.state.finalDetails);
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
    let {
      fname,
      lname,
      summary,
      email,
      phone,
      profession,
      street,
      city,
      state,
      country,
      pin,
    } = this.props.contactDetails ? this.props.contactDetails : this.state.contactDetails;
    
    let {
      collegeName,
      degree,
      cgpa,
      collegeCity,
      collegeState,
      collegeCountry
    } = this.props.educationDetails ? this.props.educationDetails : this.state.educationDetails;


    let experienceDetails = this.state.experienceDetails;
    let projects = this.state.projects;
    let skills = this.state.skills;
    let profileLinks = this.state.profileLinks;
    let achievements = this.state.achievements;
    let hobbies = this.state.hobbies;
    return (
      <div ref={this.props.refProp} className="resume-skin">
        <div className="skin-top">
          <div className="user-heading">
            <div className="user-name">
              {(fname + " " + lname).toUpperCase()}
            </div>
            <div className="user-profession">{profession.toUpperCase()}</div>
          </div>
        </div>
        <div className="skin-body">
          <div className="skin-left">
            <div className="left-section">
              <div className="left-heading">SKILLS</div>
              <div className="left-sub-section">
                <div className="left-sub-heading">LANGUAGES</div>
                <ul className="list">
                  {skills.language.map((language) => {
                    return <li className="left-body">{language}</li>;
                  })}
                </ul>
              </div>
              <div className="left-sub-section">
                <div className="left-sub-heading">FRAMEWORKS</div>
                <ul className="list">
                  {skills.frameworks.map((framework) => {
                    return <li className="left-body">{framework}</li>;
                  })}
                </ul>
              </div>
              <div className="left-sub-section">
                <div className="left-sub-heading">SOFTWARES</div>
                <ul className="list">
                  {skills.software.map((soft) => {
                    return <li className="left-body">{soft}</li>;
                  })}
                </ul>
              </div>
              <div className="left-sub-section">
                <div className="left-sub-heading">IDE</div>
                <ul className="list">
                  {skills.ide.map((singleIde) => {
                    return <li className="left-body">{singleIde}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="left-section">
              <div className="left-heading">CONTACT</div>
              <div className="left-body">{email}</div>
              <div className="left-body">{phone}</div>
              <div className="left-body">
                {street +
                  ", " +
                  city +
                  ", " +
                  state +
                  ", " +
                  country +
                  ", " +
                  pin}
              </div>
            </div>
            <div className="left-section">
              <div className="left-heading">PROFILE LINKS</div>
              <div className="left-body">{profileLinks.linkedIn}</div>
              <div className="left-body">{profileLinks.github}</div>
            </div>
            <div className="left-section">
              <div className="left-heading">HOBBIES</div>
              <ul className="list">
                {hobbies.map((hobby) => {
                  return <li className="left-body">{hobby}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="skin-right">
            <div className="right-section">
              <div className="right-heading">PROFILE</div>
              <div className="right-body">{summary}</div>
            </div>
            <div className="line"></div>
            <div className="right-section">
              <div className="right-heading">EXPERIENCE</div>
              <div className="right-sub-section">
                {experienceDetails.map((experience) => {
                  return (
                    <div className="user-company right-sub-section">
                      <div className="right-sub-heading">
                        {experience.position.toUpperCase()}
                      </div>
                      <div className="right-sub-heading-light">
                        {experience.companyName + " | " + experience.duration}
                      </div>
                      <div className="right-body">{experience.role}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="line"></div>
            <div className="right-section">
              <div className="right-heading">EDUCATION</div>
              <div className="right-sub-heading">{degree.toUpperCase()}</div>
              <div className="right-sub-heading-light">
                {collegeName +
                  ", " +
                  collegeCity +
                  ", " +
                  collegeState +
                  ", " +
                  "CGPA : " +
                  cgpa }
              </div>
            </div>
            <div className="line"></div>
            <div className="right-section">
              <div className="right-heading">PROJECTS</div>
              <div className="right-sub-section">
                {projects.map((project) => {
                  return (
                    <div className="right-sub-section">
                      <div className="right-sub-heading">
                        {project.projectName + " | " + project.projectLink}
                      </div>
                      <div className="right-sub-sub-section">
                        <div className="single-line-list">
                          <div className="right-body">TECH STACK USED :</div>
                          <ul className="list single-line-list">
                            {project.techStack.map((techStack) => {
                              return (
                                <li className="right-body single-line-list-item">
                                  {techStack}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="right-body">{project.summary}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="line"></div>
            <div className="right-section">
              <div className="right-heading">ACHIEVEMENTS</div>
              <ul className="list">
                {achievements.map((achievement) => {
                  return <li className="right-body">{achievement}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Skin1;
