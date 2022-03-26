
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends Component {
    // constructor(props) {
    //     super(props)

    //     this.button = React.createRef()
    //   }
    // // state = { isAuth : this.props.isAuth ==true ? (true) : (false)}
    state = {
        isAuth: false
    }


    componentDidMount() {
        this.authCheck();
    }
    authCheck = () => {
        let userAuth = window.localStorage.getItem("isAuth");
        console.log(userAuth);
        if (userAuth == "true") {
            this.setState({
                isAuth: true
            })
        }
    }

    homePageLoad=()=>{
        console.log("home load ");
        let navbarDiv = document.getElementsByClassName("navbar");
        console.log(navbarDiv);
        // if (navbarDiv.length != 0) {
        //     navbarDiv.classList.add("Home-navbar");
        //   }
    }

    render() {
        return (
            <div className="home-page"  >
                <div className="home-page-container">
                    <div className="home-page-container1">
                        <div className="left-cont1">
                            <h1>Online CV Builder With Creative Templates.</h1>
                            <p>Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates
                                and follow easy prompts to create the perfect job-ready resume.
                            </p>
                            {
                                this.state.isAuth ? <div className="left-cont1-btns">
                                    <div className="home-btn">
                                        <Link to="/templates">CHOOSE TEMPLATES</Link>
                                    </div>
                                    <div className="home-btn" style={{ marginLeft: "2%" }}>
                                        <Link to="about-page">ABOUT US</Link>
                                    </div>
                                </div> : <div className="left-cont1-btns">
                                    <div className="home-btn">
                                        <Link to="/signin">CHOOSE TEMPLATES</Link>
                                    </div>
                                    <div className="home-btn" style={{ marginLeft: "2%" }}>
                                        <Link to="about-page">ABOUT US</Link>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="right-cont1">
                            <img src="./images/banner2.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;