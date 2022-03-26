import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import "./userProfile.css";
class UserProfile extends Component {
    state = {
        myResumesList: [],
        fname: "",
        lname: "",
        email: "",
        myResumesList: [],
    };
    async componentDidMount() {
        let userId = JSON.parse(localStorage.getItem("user"));
        console.log(userId);
        this.setState({
            userId: userId,
        });
        let docInfo = await firebaseApp
            .firestore()
            .collection("users")
            .doc(userId)
            .get();

        let userFname = docInfo.data().FirstName;
        let userLname = docInfo.data().LastName;
        let userEmail = docInfo.data().Email;

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
            myResumesList.push({ resumeId, resumeDetails });
        }
        this.setState({
            myResumesList: myResumesList,
            fname: userFname,
            lname: userLname,
            email: userEmail,
        });
    }

    render() {
        return (
            <div className={this.state.myResumesList.length  ? "profile" : "loaderPage"}>
                {this.state.myResumesList.length ? (
                    <React.Fragment>
                        <div class="pro-left-container">
                            <div class="pro-left-container-1">
                                <div class="profile-box">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_0reNO6i6Vca5RNFEf_fHsoWbTi86fwYEmX61Wj8TBIb2WNtfIw7KX7FwZasSHjGoEQ&usqp=CAU"
                                        alt=""
                                    />
                                    <div class="profile-user-name">
                                        <span>{this.state.fname}</span>
                                        <span style={{ marginLeft: "1%" }}>{this.state.lname}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="pro-left-container-2"></div>
                        </div>
                        <div class="pro-right-container">
                            <div class="profile-user-details">
                                <div class="profile-user-details-container">
                                    <div class="profile-user-details-container-box">
                                        <div class="pfname-left">
                                            <span class="pro-fname">FIRST NAME </span>
                                        </div>
                                        <div class="pfname-right">
                                            <span class="pro-fname-val" style={{ marginLeft: "90%" }}>
                                                {this.state.fname}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="profile-user-border"></div>
                                    <div class="profile-user-details-container-box">
                                        <div class="pfname-left">
                                            <span class="pro-fname">LAST NAME </span>
                                        </div>
                                        <div class="pfname-right">
                                            <span
                                                class="pro-fname-val"
                                                style={{ marginLeft: "107%" }}
                                            >
                                                {this.state.lname}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="profile-user-border"></div>
                                    <div class="profile-user-details-container-box">
                                        <div class="pfname-left">
                                            <span class="pro-fname">EMAIL </span>
                                        </div>
                                        <div class="pfname-right">
                                            <span class="pro-fname-val" style={{ marginLeft: "46%" }}>
                                                {this.state.email}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="profile-user-border"></div>
                                </div>
                            </div>
                            <div
                                class=""
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "xx-large",
                                    borderBottom: "1px solid grey",
                                    width: "fit-content",
                                    marginLeft: "39%",
                                    marginTop: "1%",
                                }}
                            >
                                {" "}
                                Your Templates
                            </div>
                            <div class="profile-user-profile-templates">
                                {this.state.myResumesList.map((resume) => {
                                    let skinPath = resume.resumeDetails.finalDetails.skinPath;
                                    return (
                                        <div class="profile-template">
                                            <div class="profile-template-image">
                                                <img src={skinPath} alt="" />
                                            </div>

                                            <div class="choose-profile-template">
                                                Choose template
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    <div className="loader-svg">
                        <img src="./images/logg.gif" alt="" />
                    </div>
                )}
            </div>
        );
    }
}


export default UserProfile;
