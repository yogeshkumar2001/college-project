import React, { Component } from "react";
import "./skin4.css";
class Skin4 extends Component {
    state = {
        finalDetails: {
            contactDetails: {},
            educationDetails: {},
            experienceDetails: {},
            skills: "",
            about: {},
            skillsArr: [],
            achievementArr:[],
            hobbiesArr : []
            // skinId:""
        },
    };

    componentDidMount() {

        console.log("cmd of Resume1");
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
        let oldfinalDetails = this.state.finalDetails;
        this.setState({
            finalDetails: {
                ...oldfinalDetails,
                experienceDetails: lcexperienceDetails,
                educationDetails: lceducationDetails,
                contactDetails: lccontactDetails,
                about: lcabout,
                skills: lcskills,
                skillsArr: skillsArr,
                achievementArr:achievementArr,
                hobbiesArr:hobbiesArr
            },
        });
    }
    render() {
        let CDetails = this.state.finalDetails.contactDetails;
        let edu = this.state.finalDetails.educationDetails;
        let ED = this.state.finalDetails.experienceDetails;
        let skillsArr = this.state.finalDetails.skillsArr;
        let about = this.state.finalDetails.about;
        let achievementArr =this.state.finalDetails.achievementArr;
        let hobbiesArr =this.state.finalDetails.hobbiesArr;
        return ( 
            <div class="skin4-cont" ref={this.props.refProp}>
                <div class="skin4-incon">
                    <div class="box1">
                        <div class="inner-box-1" name="box1">
                            <span>Yogesh</span>
                            <span>Kumar</span>
                            <div>Web Developer</div>
                        </div>
                    </div>
                    <div class="box2">
                        <div class="inner-box-2">
                            <div class="border2">
                                <span><i class="fa-solid fa-user-large"></i></span> <span>Personal details</span>
                            </div>
                            <div class="Personal-det-box">
                                <div class="pbox1" info="ph@en">
                                    <div>
                                        <span><i class="fa-solid fa-phone"></i></span> <span>9599493681</span>
                                    </div>
                                    <div>
                                        <span><i class="fa-solid fa-envelope"></i></span> <span>yogeshdavel005@gmail.com</span>
                                    </div>
                                </div>
                                <div class="pbox1" info="address">

                                    <div><span><i class="fa-solid fa-address-card"></i></span> New Delhi , <span>Delhi </span>
                                    </div>
                                    <div><span>
                                        <i class="fa-solid fa-location-pin"></i></span> 110059</div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="box">
                        <div class="inner-box">
                            <div class="border1">
                                <span><i class="fa-solid fa-indent"></i></span> <span>Professional Summary</span>
                            </div>
                            <span>Successful sales professional with 10+ years experience in large-scale food and retail
                                environments. Implement cost control measures
                                to ensure operations remain within company targets. Maximize bottom-line performance through PL,
                                merchandising, staff manage
                                ment, loss control and inventory management. Successful sales professional with 10+ years
                                experience in large-scale food and retail
                                environments. Implement cost control measures to ensure operations remain within company
                                targets. Maximize bottom-line perfor-
                                through P L. merchandising staff management loss control and inventory management.</span>
                        </div>
                    </div>
                    <div class="box">
                        <div class="inner-box">
                            <div class="border1">
                                <span> <i class="fa-solid fa-graduation-cap"></i></span> <span>Education</span>
                            </div>
                            <div class="school-info-skin4">
                                <div class="school-con">
                                    <div class="school-con-box">
                                        <div>kendriya vidhayala</div>
                                        <span>CGPA - </span> <span>8.0</span>
                                    </div>
                                    <div class="school-con-box">
                                        <div>SAITM</div>
                                        <span>CGPA - </span> <span>8.0</span>
                                    </div>

                                </div>
                                <div class="school-con">
                                    <div class="school-con-box">
                                        <div>12-03-2001</div>
                                        <div>Vikas puri </div>
                                    </div>

                                    <div class="school-con-box">

                                        <div>08-12-2023</div>
                                        <div>gurgram</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="inner-box">
                            <div class="border1">
                                <span><i class="fa-solid fa-user-tie"></i></span> <span>experience</span>
                            </div>
                            <div class="exp-info-skin4">
                                <div class="exp-info-skin4-box">
                                    <div> Juinor developer</div>
                                    <div><span>Flipkart</span> | <span>Uttar pradesh</span></div>
                                </div>
                                <div class="exp-info-skin4-box2">
                                    <div>
                                        <span>&#x26AC;</span> <span>web developer </span>
                                    </div>
                                    <div>
                                        <span>&#x26AC;</span> <span>Product based</span>
                                    </div>
                                    <div>
                                        <span>&#x26AC;</span> <span>Staring date : <span>2022-01-30 </span></span>
                                    </div>

                                    <span>&#x26AC;</span> <span>Ending date : <span>2022-01-30 </span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-box">
                        <div class="inner-box">
                            <div class="border1">
                                <span><i class="fa-solid fa-chalkboard-user"></i></span> <span>Skills</span>
                            </div>
                            <div class="skill-box" >
                                <div >
                                    <ul>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-box">
                        <div class="inner-box">
                            <div class="border1">
                                <span><i class="fa-solid fa-user-tag"></i></span> <span>about</span>
                            </div>
                            <div class="skill-box" >
                                <div >
                                    <ul>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-box">
                        <div class="inner-box">
                            <div class="border1">
                                <span><i class="fa-solid fa-user-tag"></i></span> <span>achievement</span>
                            </div>
                            <div class="skill-box" >
                                <div >
                                    <ul>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

        );
    }
}
export default Skin4;
