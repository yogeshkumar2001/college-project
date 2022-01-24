import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends React.Component {
    state = {
        about: {
            achievement: "",
            hobbies: "",
        },
        skinPath: ""
    }
    onChangeHandler = (e) => {
        // console.log(contactCodes);
        let id = e.target.id;
        let value = e.target.value;
        let oldabout = this.state.about;
        this.setState({
            about: {
                ...oldabout,
                [id]: value
            }
        });
    };
    backButtonHandler = () => {
        console.log("back button clicked !!");
    };
    nextButtonHandler = () => {
        console.log("next button clicked !!");
        let oldAboutDetails = this.state.about;
        localStorage.setItem(
            "about",
            JSON.stringify(oldAboutDetails)
        );
    };
    componentDidMount() {
        let skinPath = JSON.parse(localStorage.getItem("skinPath"));
        console.log("skinId=>>>" + skinPath);
        this.setState({
            skinPath: skinPath
        })
        let userAboutDetails = JSON.parse(localStorage.getItem("about"));
        console.log(userAboutDetails);
        if (userAboutDetails) {
            this.setState({
                about: {
                    ...userAboutDetails,
                }
            });
            let achievementInput = document.getElementById("achievement");
            achievementInput.value = userAboutDetails.achievement;
            let hobbiesInput = document.getElementById("hobbies");
            hobbiesInput.value = userAboutDetails.hobbies;
        }
    }
    render() {
        return (
            <div className="contact-details-container">
                <div className="contact-form">
                    <div className="headings">
                        <h3>Tell us about your self.</h3>
                        <h5>Tell us about your achievements and hobbies.</h5>
                    </div>
                    <div className="skill-form-container">
                        <div className="skill-form">
                            <div className="skill-details">
                                <div class="form-floating mb-3 skill">
                                    <input
                                        type="text"
                                        required="required"
                                        class="form-control"
                                        id="achievement"
                                        placeholder="name@example.com"
                                        onChange={(e) => {
                                            this.onChangeHandler(e);
                                        }}
                                    ></input>
                                    <label for="floatingInput">Write About Your Achievements</label>
                                </div>
                                <div class="form-floating mb-3 skill">
                                    <input
                                        type="text"
                                        required="required"
                                        class="form-control"
                                        id="hobbies"
                                        placeholder="name@example.com"
                                        onChange={(e) => {
                                            this.onChangeHandler(e);
                                        }}
                                    ></input>
                                    <label for="floatingInput">Write About Your Hobbies</label>
                                </div>
                            </div>
                            {/* ///// */}
                        </div>
                        <div className="btn-conatiner">
                            <Link to="/skills">
                                <div className="btn1">Back</div>
                            </Link>
                            <Link to="/final">
                                <div className="btn1" onClick={this.nextButtonHandler}>
                                    Next
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="skin-image">
                    <div className="skin-img-container">
                        <img src={this.state.skinPath} alt="" />
                    </div>
                    {/* <div className="btn"></div> */}
                </div>
            </div>
        );
    }
}

export default About;
