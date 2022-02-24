import React, { Component } from "react";
import ReactToPdf from "react-to-pdf";
import firebaseApp from "../../firebase/firebaseConfig";
import "./Final.css";
import Resume1 from "./Resume1";
import Skin1 from "../Skins/skin1";
import Skin2 from "../Skins/skinv";
import Skin3 from "../Skins/skin3";
import Skin4 from "../Skins/skin4";
import Skin5 from "../Skins/skin5"
import Skin6 from "../Skins/skin6"
import Skin7 from "../Skins/skin7"
import Skin8 from "../Skins/skin8"

class Final extends React.Component {
  resume = React.createRef();
  state = {
    finalDetails: {
      contactDetails: {},
      educationDetails: {},
      experienceDetails: {},
      skills: "",
      about: {},
      skillsArr: [],
      achievementArr:[],
      hobbiesArr : [],
      skinId:"",
      skinPath:""
  },
  skinId:""
  }
  componentDidMount() {
    console.log("inside cdm of final.jsx");
    let lcSkinId = JSON.parse(localStorage.getItem("skinId"));
    console.log(lcSkinId);
    if (lcSkinId) {
      this.setState({
        skinId: lcSkinId
      })
    }
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
    let skillsArr = lcskills.split(",");
    let lcabout = JSON.parse(window.localStorage.getItem("about"));
    let achievementArr = lcabout.achievement.split(",");
    let hobbiesArr = lcabout.hobbies.split(",");
    let skinPath = JSON.parse(window.localStorage.getItem("skinPath"));
    let oldfinalDetails = this.state.finalDetails;
    console.log(oldfinalDetails)
    this.setState({
      finalDetails: {
        ...oldfinalDetails,
        experienceDetails: lcexperienceDetails,
        educationDetails: lceducationDetails,
        contactDetails: lccontactDetails,
        about: lcabout,
        skills: lcskills,
        skillsArr: skillsArr,
        achievementArr: achievementArr,
        hobbiesArr: hobbiesArr,
        skinId : lcSkinId,
        skinPath : skinPath
      },
    });   
  }
  saveUserInfo = async() => {
    localStorage.setItem("finalDetails" , JSON.stringify(this.state.finalDetails));
    let selectResumeId = localStorage.getItem("selectedResumeId");
    if(selectResumeId){
       await firebaseApp.firestore().collection("resumes").doc(selectResumeId).update({
      finalDetails : this.state.finalDetails
    });
    }
    localStorage.removeItem("selectedResumeId");
  }
  render() {
    console.log("isnide final");
    let skinId = this.state.skinId;
    let tskin;
    if (skinId == "skin1") {
      tskin = <Skin1 refProp={this.resume}></Skin1>
    } else if (skinId == "skin2") {
      tskin = <Skin2 refProp={this.resume}></Skin2>
    } else if (skinId == "skin3") {
      tskin = <Skin3 refProp={this.resume}></Skin3>
    } else if (skinId == "skin4") {
      tskin = <Skin4 refProp={this.resume}></Skin4>
    } else if (skinId == "skin5") {
      tskin = <Skin5 refProp={this.resume}></Skin5>
    } else if (skinId == "skin6") {
      tskin = <Skin6 refProp={this.resume}></Skin6>
    } else if (skinId == "skin7") {
      tskin = <Skin7 refProp={this.resume}></Skin7>
    } else if (skinId == "skin8") {
      tskin = <Skin8 refProp={this.resume}></Skin8>
    }
    else {
      tskin = <Resume1 refProp={this.resume}></Resume1>
    }

    return (
      <div className="final">
        {/* <h1 style={{"margin-left":"300px"}}>Your Final Resume Is Here</h1> */}
        <div className="resume-view-container">
          <div className="resume-view" >
            <React.Fragment>
              {tskin}
            </React.Fragment>
          </div>
          <ReactToPdf targetRef={this.resume} filename="resume.pdf">
            {({ toPdf }) => (
              <div className="download-view">
                <div className="download-btn" onClick={toPdf}>Download Resume</div>
                <div className="download-btn" onClick={this.saveUserInfo}>Save Resume</div>

              </div>

            )}
          </ReactToPdf>

        </div>
      </div>
    );
  }
}

export default Final;
