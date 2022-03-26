import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import SignInSide from "@mui/styled-engine-sc"
import { Link, Redirect } from "react-router-dom";
import "./SignIn.css"
class SignIn extends Component {
  state = {
    id: "",
    pw: ""
  };


  onChangeHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    this.setState({
      [id]: value
    })
    // firebaseApp.auth().onAuthStateChanged(async (user) => {
    //   console.log("Inside auth state changed !!");
    //   let selectResumeId = null;
    //   let resumeDetails = null;
    //   // check if logged in ??
    //   if (user) {
    //     console.log("inside iff")
    //     // get selected resumeId
    //     let doc = await firebaseApp
    //       .firestore()
    //       .collection("users")
    //       .doc(user.uid)
    //       .get();
    //     let resumes = doc.data()["Resumes"];
    //     for (let i = 0; i < resumes.length; i++) {
    //       if (resumes[i].isSelected) {
    //         selectResumeId = resumes[i].resumeId;
    //         break;
    //       }
    //     }

    //     // get resume details
    //     if (selectResumeId) {
    //       let resumeInfo = await firebaseApp
    //         .firestore()
    //         .collection("resumes")
    //         .doc(selectResumeId)
    //         .get();
    //       resumeDetails = resumeInfo.data();
    //     }

    //     let userInfo = {
    //       "isAuth": user ? true : false,
    //       "user": user ? user.uid : null,
    //       "selectResumeId": selectResumeId,
    //       "resumeDetails": resumeDetails
    //     }
    //     localStorage.setItem("userInfo", JSON.stringify(userInfo));
    //     this.setState({
    //       isAuth: user ? true : false,
    //       user: user ? user.uid : null,
    //       selectResumeId: selectResumeId,
    //       resumeDetails: resumeDetails,
    //     });

    //   }
    // });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isAuth ? <Redirect></Redirect> : (<div class="signin-page">
          <div class="signin-container">
            <div class="signin-inner">
              <div class="signin-box">
                <div class="signin-box-inputs">
                  <div class="input-1">
                    <div for="email">Email Address</div>
                    <input
                      type="email"
                      id="id"
                      value={this.state.id}
                      onChange={(e) => {
                        this.onChangeHandler(e);
                      }}
                      placeholder="Email"
                    />
                  </div>
                  <div class="input-1">
                    <div for="password">Password</div>
                    <input
                      type="text"
                      id="pw"
                      value={this.state.pw}
                      onChange={(e) => {
                        this.onChangeHandler(e);
                      }}
                      placeholder="password"
                    />
                  </div>
                  <div class="login-btn" onClick={() => { this.props.login(this.state.id, this.state.pw) }} >LOGIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
      </React.Fragment>
    );
  }
}

export default SignIn;
