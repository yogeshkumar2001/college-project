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
    isAuth :null,
  };

  handleChooseTemplate = async (e) => {
    let skinId = e.target.id;
    console.log(e)
    console.log(e.target.attributes[2].nodeValue)
    console.log(skinId);
    localStorage.setItem("skinPath" ,JSON.stringify(e.target.attributes[2].nodeValue) );
    localStorage.setItem("skinId" ,JSON.stringify(skinId) );
    // get skinID
    let selectResumeId;
     selectResumeId = localStorage.getItem("selectedResumeId");
     console.log(selectResumeId);
    let resumeId;
    if(!this.props.selectedResumeId){
      let addObj = await firebaseApp.firestore().collection("resumes").add( { skinId : skinId , ...initialState  }  );
      resumeId = addObj.id;
      console.log(resumeId);
      
      await firebaseApp.firestore().collection("users").doc(this.props.uid).update({
        Resumes: firebase.firestore.FieldValue.arrayUnion(resumeId)
      })
      // this.props.history.push("/contact");
      this.props.setResumeId(resumeId);
      let skinPath = {}
    }
    else{
    // this.props.history.push({
    //   pathname: "/contact",
    //   state: { skinId: skinId },
    // });
    // console.log(selectedResumeId)
    }
  };
  componentDidMount(){
    let userAuth = JSON.parse(localStorage.getItem("isAuth"));
    if(userAuth){
      this.setState({
        isAuth : true
      })
    }
  }

  render() {
    return (
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
    );
  }
}

export default Templates;
