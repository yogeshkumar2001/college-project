import React, { Component, createRef } from "react";
import { Redirect } from "react-router-dom";
import firebaseApp from "../../firebase/firebaseConfig";
import "./SingUp.css"

class SignUp extends Component {
  state = {
    fname: "",
    lname: "",
    id: "",
    pw: "",
    error: "",
    userCreated: false
  };

  onChangeHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    this.setState({
      [id]: value,
    });
  };


  signUpHandler = () => {
    // this.props.signup !!!
    let id = this.state.id;
    let pw = this.state.pw;
    firebaseApp.auth().createUserWithEmailAndPassword(id, pw)
      .then(userInfo => {
        console.log("Inside then");
        //   console.log(userInfo);
        let fname = this.state.fname;
        let lname = this.state.lname;
        let uid = userInfo.user.uid;
        let userCreatedPromise = firebaseApp.firestore().collection("users").doc(uid).set({
          "FirstName": fname,
          "LastName": lname,
          "Email": id,
          "Password": pw,
          "Uid": uid,
          "Resumes": []
        })
        return userCreatedPromise;
      })
      .then(obj => {
        console.log("User Created !!!!");
        this.setState({
          userCreated: true
        })
        //  document.getElementsByClassName("#root > div > div.navbar > div.logo > a");


      })
      .catch(error => {
        console.log("inside catch");
        console.log(error);
        this.setState({
          error: error.message
        })


      })

  }

  render() {
    return (
      <React.Fragment>

        {
          this.state.userCreated ? (<Redirect to="/"></Redirect>) : (<div class="signup-page">
            <div class="signup-container">
              <div class="signup-inner">
                <div class="signup-box">
                  <div class="signup-box-inputs">
                    <div class="input-1">
                      <div for="">First Name</div>
                      <input
                        type="text"
                        id="fname"
                        value={this.state.fname}
                        onChange={(e) => {
                          this.onChangeHandler(e);
                        }}
                        placeholder="First Name"
                      />
                    </div>
                    <div class="input-1">
                      <div for="">Last Name</div>
                      <input
                        type="text"
                        id="lname"
                        value={this.state.lname}
                        onChange={(e) => {
                          this.onChangeHandler(e);
                        }}
                        placeholder="Last Name"
                      />
                    </div>
                    <div class="input-1">
                      <div for="">Email</div>
                      <input
                        type="text"
                        id="id"
                        value={this.state.id}
                        onChange={(e) => {
                          this.onChangeHandler(e);
                        }}
                        placeholder="Email"
                      />
                    </div>
                    <div class="input-1">
                      <div for="">Password</div>
                      <input
                        type="text"
                        id="pw"
                        value={this.state.pw}
                        onChange={(e) => {
                          this.onChangeHandler(e);
                        }}
                        placeholder="Password"
                      />
                    </div>
                    <div class="login-btn" onClick={this.signUpHandler} >SIGN UP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
        }
      </React.Fragment>
    );
  }
}

export default SignUp;
