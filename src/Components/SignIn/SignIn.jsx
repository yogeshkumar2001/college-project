import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
class SignIn extends Component {
  state = {
    id : "" ,
    pw : ""
  };


  onChangeHandler = (e) =>{
    let id = e.target.id;
    let value = e.target.value;
    this.setState({
      [id] : value
    })
    firebaseApp.auth().onAuthStateChanged(async (user) => {
      console.log("Inside auth state changed !!");
      let selectResumeId = null;
      let resumeDetails =null;
      // check if logged in ??
      if (user) {
        console.log("inside iff")
        // get selected resumeId
        let doc = await firebaseApp
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get();
        let resumes = doc.data()["Resumes"];
        for (let i = 0; i < resumes.length; i++) {
          if (resumes[i].isSelected) {
            selectResumeId = resumes[i].resumeId;
            break;
          }
        }

        // get resume details
          if(selectResumeId){
            let resumeInfo = await firebaseApp
            .firestore()
            .collection("resumes")
            .doc(selectResumeId)
            .get();
            resumeDetails = resumeInfo.data();
          }

          let userInfo = {
            "isAuth" : user ? true : false,
            "user": user ? user.uid : null,
           "selectResumeId": selectResumeId,
            "resumeDetails": resumeDetails
          }
          localStorage.setItem("userInfo" , JSON.stringify(userInfo));
        this.setState({
          isAuth: user ? true : false,
          user: user ? user.uid : null,
          selectResumeId: selectResumeId,
          resumeDetails: resumeDetails,
        });

      }
    });
  }

  render() {
    return (
      <div className="login">
        <div>
          <h2>Id</h2>
          <input type="text" id="id" value={this.state.id} onChange={ (e) => {this.onChangeHandler(e)}  }/>
        </div>
        <div>
          <h2>Password</h2>
          <input type="text" id="pw" value = {this.state.pw} onChange={ (e) =>{this.onChangeHandler(e)} }/>
        </div>
        <div className="signin-button">
           <button onClick={ () => { this.props.login(this.state.id , this.state.pw) }  }>Sign In</button> 
        </div>
      </div>
    );
  }
}

export default SignIn;
