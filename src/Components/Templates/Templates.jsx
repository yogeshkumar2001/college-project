import React, { Component } from "react";
import "./Templates.css";
import firebaseApp from "../../firebase/firebaseConfig";
import firebase from "firebase";
import initialState from "../../util/initialState";
import { Link } from "react-router-dom";

class Templates extends Component {
  state = {
    skins: [
      { id: "skin1", path: "./images/skin1.png" },
      { id: "skin2", path: "./images/skin2.png" },
      { id: "skin3", path: "./images/skin3.svg" },
      { id: "skin4", path: "./images/skin4.svg" },
      { id: "skin5", path: "./images/skin5.svg" },
      { id: "skin6", path: "./images/skin6.svg" },
      { id: "skin7", path: "./images/skin7.svg" },
      { id: "skin8", path: "./images/skin8.svg" },
    ],
    isAuth: null,
  };

  handleChooseTemplate = async (e) => {
    let skinId = e.target.id;
    localStorage.setItem("skinPath", JSON.stringify(e.target.attributes[2].nodeValue));
    localStorage.setItem("skinId", JSON.stringify(skinId));
    // get skinID
    let selectResumeId;
    selectResumeId = localStorage.getItem("selectedResumeId");
    console.log(selectResumeId);
    let resumeId;
    if (!selectResumeId) {
      let addObj = await firebaseApp.firestore().collection("resumes").add({ skinId: skinId, ...initialState });
      resumeId = addObj.id;
      await firebaseApp.firestore().collection("users").doc(this.props.uid).update({
        Resumes: firebase.firestore.FieldValue.arrayUnion(resumeId)
      })
      console.log("resume id " + resumeId);
      localStorage.setItem("selectedResumeId", resumeId);
    }
  };
  componentDidMount() {
    let userAuth = JSON.parse(localStorage.getItem("isAuth"));
    if (userAuth) {
      this.setState({
        isAuth: true
      })
    }
  }

  render() {
    return (
      <div className="templates-container" onLoad={this.props.IsTAPage}>
        <div className="templates-welcome">
          <div className="temp-wel-cont">
            <h1>Our Templates</h1>
          </div>
        </div>
        <div className="templates">

          {this.state.skins.map((skin) => {
            return (
              <div key={skin.id} className="template">
                <div className="template-image">
                  <img src={skin.path} alt="" />
                </div>
                <Link to="/contact">
                  <div
                    className="choose-template"
                    id={skin.id}
                    path={skin.path}
                    onClick={(e) => this.handleChooseTemplate(e)}
                  >
                    Choose Template
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Templates;
