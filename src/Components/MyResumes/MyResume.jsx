import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./MyResume.css";

class MyResume extends Component {
  state = {
    myResumesList: [],
    userId:null
  };

  // simple method
  async componentDidMount() {
    let userId = JSON.parse(localStorage.getItem("user"));
    console.log(userId);
    this.setState({
      userId:userId
    })
    let docInfo = await firebaseApp
      .firestore()
      .collection("users")
      .doc(userId)
      .get();
    let myResumes = docInfo.data().Resumes;
    let myResumesList = [];
    for (let i = 0; i < myResumes.length; i++) {
      let resumeId = myResumes[i];
      let resumeInfo = await firebaseApp
        .firestore()
        .collection("resumes")
        .doc(resumeId)
        .get();
      let resumeDetails = resumeInfo.data();
      myResumesList.push({  resumeId, resumeDetails });
    }
    this.setState({
      myResumesList: myResumesList,
    });
    
  }

  render() {
    return (
      <div className="templates">
        {this.state.myResumesList.length ? (
          <React.Fragment>
            {this.state.myResumesList.map((myResume) => {
              let skinPath = myResume.resumeDetails.finalDetails.skinPath;
              // console.log(skinPath);
              return (
                <div
                  key={myResume.resumeId}
                  id={myResume.resumeId}
                  className="template"
                >
                  <div className="template-image">
                    <img src={(skinPath)} />
                  </div>
                    <React.Fragment>
                      <div className="template-actions">
                        <div
                          className="select"
                          id={myResume.resumeId}
                        >
                          Select Resume
                        </div>
                      </div>
                    </React.Fragment>
                 
                </div>
              );
            })}
          </React.Fragment>
        ) : (
          <h1>Sit Tight , Loading Templates !!!</h1>
        )}
      </div>
    );
  }
}

export default MyResume;
