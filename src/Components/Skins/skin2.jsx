import React, { Component } from 'react';
import "./skin2.css"
class skin2 extends Component {
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
            <div className="div"  ref={this.props.refProp}>
                <div class="box">
                    <div className="left-con">
                    <div class="skills">SKILLS</div>
                    <div class="list">
                        <ul>
                            <li class="item">C++</li>
                            <li class="item">Javascript</li>
                            <li class="item">Python</li>
                            <li class="item">NodeJS</li>
                            <li class="item">HTML</li>
                            <li class="item">React</li>
                            <li class="item">CSS</li>
                            <li class="item">Jquery</li>
                            <li class="item">MongoDB</li>
                        </ul>
                    </div>
                    </div>
                    <div className="right-con"></div>
                   

                    <div class="achivements">ACHIVEMENTS</div>
                    <div class="ach">
                        <ul>
                            <li>Achivement 1</li>
                            <li>Achivement 2</li>
                            <li>Achivement 3</li>
                            <li>Achivement 4</li>
                            <li>Achivement 5</li>
                        </ul>
                    </div>

                    <div class="interests">INTERESTS</div>
                    <div class="hobby">
                        <ul>
                            <li>hobby 1</li>
                            <li>hobby 2</li>
                            <li>hobby 3</li>
                            <li>hobby 4</li>
                        </ul>
                    </div>
                    <div class="contact">CONTACT</div>
                    <div class="tony">TONY ALMEDIA</div>
                    <div class="soft">Software Engineer</div>
                    <div class="para">
                        <p>
                            "4+ years experinced Software Engineer highly skilled in software
                            development, testing, documentation etc. across the complete
                            development life cycle of a product. Adept at end to end software
                            design & development including requirement gathering, documentation,
                            infrastructure setup,coding & unit & integration testing. Handles
                            complex project management & coordination work very efficiently to
                            deliver results."
                        </p>
                    </div>

                    <div class="edu">EDUCATIONAL DETAILS</div>
                    <div class="uc">
                        <h5>UC Berkeley</h5>
                        <li>B.E Computer Science</li>
                        <li>8 CGPA</li>
                        <li>August 2023</li>
                        <li>Berkeley, CA</li>
                        <h5>ABC SR. SEC. SCHOOL</h5>
                        <li>Class 12 | 2019 | 95%</li>
                        <li>Class 10 | 2017 | 10 CGPA</li>
                    </div>

                    <div class="experience">EXPERIENCE</div>

                    <div class="exp">
                        <h4>Stay Great Hotels</h4>
                        <li>
                            Full time employee as a Web Developer and Mobile Application engineer
                        </li>
                        <li>2 years</li>

                        <h4>Stark Tech LLC</h4>
                        <li>Worked as Web Developer & Mobile Application Intern</li>
                        <li>3 months</li>
                    </div>

                    <div class="projects">PROJECTS</div>
                    <div class="pr">
                        <h4>Project 1</h4>
                        <li>abc</li>
                        <li>This is the summary of my project</li>
                        <h4>Project 2</h4>
                        <li>abc</li>
                        <li>This is the summry of my project</li>
                    </div>

                    <div class="position">POSITION OF RESPONSIBILITY</div>

                    <div class="por">
                        <h4>POR 1</h4>
                        <li>abc</li>
                        <li>This is the summary of my project</li>
                        <h4>POR 2</h4>
                        <li>abc</li>
                        <li>This is the summry of my project</li>
                    </div>

                    <div class="cn">
                        <ul>
                            <li><a href="#"></a>+1(333)5557777</li>
                            <li><a href="#"></a>tony@gmail.com</li>
                            <li><a href="#"></a>myLinkedInProfile</li>
                            <li><a href="#"></a>myGitHubProfile</li>
                            <li><a href="#"></a>House No. 123,</li>
                            <li><a href="#"></a>Street no. xyz, SF, CA ,</li>
                            <li><a href="#"></a>U.S.A,123456</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default skin2;