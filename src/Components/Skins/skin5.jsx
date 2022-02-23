import React, { Component } from 'react';
import "./skin5.css";
class Skin5 extends Component {
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
            <div class="skin5-cont" ref={this.props.refProp}>
                <div class="skin5-incon">
                    <div class="skin5b1">
                        <div class="skin5hbox1">
                            YK
                        </div>
                        <div class="hbox2">
                            <span>Yogesh</span>
                            <span style={{ marginLeft: "2%" }}>Kumar</span>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="skin5b2">
                        <div class="skin5bl">
                            <div class="skin5p">PROFESSIONAL SUMMARY</div>
                            <div class="skin5p">PERSONAL DETAILS</div>
                            <div class="skin5p">EDUCATION DETAILS</div>
                            <div class="skin5p">EXPERIENCE DETAILS</div>
                            <div class="skin5p">SKILLS</div>
                            <div class="skin5p">ABOUT</div>
                            <div class="skin5p">HOBBIES</div>

                        </div>
                        <div class="skin5br">
                            <div class="skin5pd1">Successful sales professional with 10+ years experience in large-scale food
                                and
                                retail environments.
                                Implement cost control measures to ensure operations remain within company targets. Maximize
                                bottom-line performance through PL, merchandising, staff management, loss control and inventory
                                management.</div>
                            <div class="skin5pd1">
                                <div class="dp1">
                                    <ul>
                                        <li><span>EMAIL : </span>yogeshdavel005@gmail.com</li>
                                        <li><span>PHONE : </span>9599493681</li>
                                        <li><span>PROFESSION : </span>Web Developer</li>
                                    </ul>
                                </div>
                                <div class="pd2">
                                    <ul>
                                        <li><span>CITY : </span>New Delhi</li>
                                        <li><span>STATE : </span>Delhi</li>
                                        <li><span>PIN : </span>110059</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="skin5pd1">
                                <ul>
                                    <li><span>SCHOOL : </span>kendriya vidhalaya</li>
                                    <li><span>LOCATION : </span>Vikas puri</li>
                                    <li><span>CGPA : </span>8.0</li>
                                </ul>
                                <ul class="cl-ul">
                                    <li><span>COLLEGE : </span>SAITM</li>
                                    <li><span>LOCATION : </span>gurgoan</li>
                                    <li><span>CGPA : </span>8.0</li>
                                    <li><span>DEGREE : </span>8.0</li>
                                    <li><span>STREAM : </span>8.0</li>
                                </ul>
                            </div>
                            <div class="skin5pd1">
                                <ul>
                                    <li><span>COMPANY : </span>flipkart</li>
                                    <li><span>JOB TITLE : </span>web developer</li>
                                    <li><span>POSITION : </span>junior</li>
                                </ul>
                                <ul class="ex-ul">
                                    <li><span>START DATE : </span>2022-01-30</li>
                                    <li><span>END DATE : </span>2022-03-05</li>
                                    <li><span>CITY : </span>Uttar pradesh</li>
                                </ul>
                            </div>
                            <div class="skin5pd1">
                                <ul>
                                    <li>flipkart</li>
                                    <li>web developer</li>
                                    <li>junior</li>
                                </ul>
                                <ul class="sl-ul">
                                    <li>flipkart</li>
                                    <li>web developer</li>
                                    <li>junior</li>
                                </ul>
                            </div>
                            <div class="skin5pd1">

                                <ul>
                                    <li>Flipkart</li>
                                    <li>Web developer</li>
                                    <li>Junior</li>
                                </ul>
                            </div>
                            <div class="skin5pd1">
                                <ul>
                                    <li>Flipkart</li>
                                    <li>Web developer</li>
                                    <li>Junior</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Skin5;
