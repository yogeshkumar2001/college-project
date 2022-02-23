import React, { Component } from 'react';
import "./skin8.css";
class Skin8 extends Component {

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

                            <div class="triangle-right"><span class="triangle-right-span1">Y</span></div>
                            <span class="span2">K</span>

                        </div>
                        <div class="hbox2">
                            <span>{CDetails.fname}</span>
                            <span>{CDetails.lname}</span>
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
                            <div class="skin5pd1">{CDetails.summary}</div>
                            <div class="skin5pd1">
                                <div class="dp1">
                                    <ul>
                                        <li><span>EMAIL : </span>{CDetails.email}</li>
                                        <li><span>PHONE : </span>{CDetails.phone}</li>
                                        <li><span>PROFESSION : </span>{CDetails.profession}</li>
                                    </ul>
                                </div>
                                <div class="pd2">
                                    <ul>
                                        <li><span>CITY : </span>{CDetails.city}</li>
                                        <li><span>STATE : </span>{CDetails.state}</li>
                                        <li><span>PIN : </span>{CDetails.pin}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="skin5pd1">
                                <ul>
                                    <li><span>SCHOOL : </span>{edu.schoolName}</li>
                                    <li><span>LOCATION : </span>{edu.schoolLocation}</li>
                                    <li><span>CGPA : </span>{edu.schoolCgpa}</li>
                                </ul>
                                <ul class="cl-ul">
                                    <li><span>COLLEGE : </span>{edu.collegeName}</li>
                                    <li><span>LOCATION : </span>{edu.collegeLocation}</li>
                                    <li><span>CGPA : </span>{edu.collegeCgpa}</li>
                                    <li><span>DEGREE/STREAM : </span>{edu.degree} / <span>{edu.field}</span> </li>
                                    {/* <li><span>STREAM : </span></li> */}
                                </ul>
                            </div>
                            <div class="skin5pd1">
                                <ul>
                                    <li><span>COMPANY : </span>{ED.companyName}</li>
                                    <li><span>JOB TITLE : </span>{ED.jobTitle}</li>
                                    <li><span>POSITION : </span>{ED.position}</li>
                                </ul>
                                <ul class="ex-ul">
                                    <li><span>START DATE : </span>{ED.stateDate}</li>
                                    <li><span>END DATE : </span>{ED.endDate}</li>
                                    <li><span>CITY : </span>{ED.city}</li>
                                </ul>
                            </div>
                            <div class="skin5pd1">

                                <ul>
                                    <li>{skillsArr[0]}</li>
                                    <li>{skillsArr[1]}</li>
                                    <li>{skillsArr[2]}</li>
                                </ul>
                                <ul class="sl-ul">
                                    <li>{skillsArr[3]}</li>
                                    <li>{skillsArr[4]}</li>
                                </ul>
                            </div>
                            <div class="skin5pd1">

                                <ul>
                                    {
                                        achievementArr.map((achievement)=>{
                                                return <li>{achievement}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div class="skin5pd1">
                                <ul>
                                {
                                        hobbiesArr.map((hobbies)=>{
                                                return <li>{hobbies}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Skin8;
