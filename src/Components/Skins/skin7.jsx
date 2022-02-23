import React, { Component } from 'react';
import "./skin7.css";
class Skin7 extends Component {
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
            <div class="skin6-cont" ref={this.props.refProp}>
            <div class="skin6-incont">
                <div class="skin6box1">
                    <div class="skin6box1-upr">
                        Yogesh Kumar
                    </div>
                    <div class="skin6box1-dwn">
                        <span>699-812-1342</span> | <span>jwalker@gmail.com</span> | <span>24 Armor Lane, North Easton, MA
                            20013</span>
                    </div>
                </div>
                <div class="skin6box">
                    <div class="skin6box-upr"><span><i class="fa-solid fa-angles-right"></i></span> PROFESSIONAL SUMMARY</div>
                    <div class="skin6box-dwn">Successful sales professional with 10+ years experience in large-scale food
                        and retail environments. Implement
                        cost control measures to ensure operations remain within company targets. Maximize bottom-line
                        performance
                        through P L, merchandising, staff management, loss control and inventory management. Successful
                        sales profes-
                        sional with 10+ years experience in large-scale food and retail environments. Implement cost control
                        measures to
                        ensure operations remain targets.</div>
                </div>
                <div class="skin6box">
                    <div class="skin6box-upr"><span><i class="fa-solid fa-angles-right"></i></span> SKILLS</div>
                    <div class="skin6box-dwn">
                        <ul>
                            <li>HTML</li>
                            <li>HTML</li>
                            <li>HTML</li>
                            <li>HTML</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                </div>
                <div class="box">
                    <div class="inner-box">
                        <div class="skin7-border1">
                            <span><i class="fa-solid fa-angles-right"></i></span> <span>experience</span>
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
                <div class="box">
                    <div class="inner-box">
                        <div class="skin7-border1">
                            <span><i class="fa-solid fa-angles-right"></i></span> <span>Education</span>
                        </div>
                        <div class="school-info-skin4">
                            <div class="school-info-box1">
                                <div class="school-info-innerbox1">
                                    <div class="school-info-hd">School Education</div>
                                    <div class="">
                                        <ul>
                                            <li>Kendriya vidhayala</li>
                                            <li>Vikas puri</li>
                                            <li>8.0 CGPA </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="school-info-innerbox2">
                                    <div class="school-info-hd">College Education</div>
                                    <div class="">
                                        <ul>
                                            <li><span>SAITM </span> | <span>Gurgram</span></li>
                                            <li><span>Btech</span> | <span>CSE</span></li>
                                            <li><span>2022-01-30</span> - <span>2022-02-28</span></li>
    
    
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                </div>
    
                <div class="d-box">
                    <div class="inner-box">
                        <div class="skin7-border1">
                            <span><i class="fa-solid fa-angles-right"></i></span> <span>about</span>
                        </div>
                        <div class="skill-box">
                            <div>
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
                        <div class="skin7-border1">
                            <span><i class="fa-solid fa-angles-right"></i></span> <span>achievement</span>
                        </div>
                        <div class="skill-box">
                            <div>
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
            </div>
        </div>
        );
    }
}

export default Skin7;
