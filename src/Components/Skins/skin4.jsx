import React, { Component } from 'react';
import "./skin4.css";

class Skin4 extends Component {

    state = {
        contactDetails: {
            fname: "TONY",
            lname: "ALMEIDA",
            summary: "4+ years experienced Software Engineer highly skilled in software development, testing, documentation etc. across the complete development life cycle of a product. Adept at end to end software design & development including requirement gathering, documentation, infrastructure setup, coding & unit & integration testing. Handles complex project management & coordination work very efficiently to deliver results. ",
            email: "tony@gmail.com",
            phone: "+1 (333)5557777",
            profession: "Software Engineer",
            houseNo: "123",
            street: "xyz",
            city: "SF",
            state: "CA",
            country: "USA",
            pin: "123456",
        },
        educationDetails: {
            collegeName: "UC Berkeley",
            degree: "B.E. Computer Science",
            cgpa: "8",
            collegeCity: "Berkeley",
            collegeState: "CA",
            graduationMonth: "August",
            graduationYear: "2023",
            schoolName: "ABC SR. SEC. SCHOOL",
            class12: { percentage: "95%", year: "2019" },
            class10: { cgpa: "10", year: "2017" }
        },
        experienceDetails: [
            { companyName: "Stay Great Hotels", duration: "2 years", position: "Full time employee as a Web Developer and Mobile Application engineer" },
            { companyName: "Stark Tech LLC ", duration: "3 months", position: "Worked as a Web Developer & Mobile Application Intern " }
        ],
        projects: [
            { projectName: "project1", techStack: ["a", "b", "c"], summary: "this is the summary of my project", projectLink: "linkToMyProject" },
            { projectName: "project2", techStack: ["a", "b", "c"], summary: "this is the summary of my project", projectLink: "linkToMyProject" },
            { projectName: "project3", techStack: ["a", "b", "c"], summary: "this is the summary of my project", projectLink: "linkToMyProject" }
        ],
        POR: [
            { position: "POR 1", summary: "POR summary" },
            { position: "POR 2", summary: "POR summary" },
            { position: "POR 3", summary: "POR summary" }
        ],
        skills: ["C++", "JavaScript", "Python", "NodeJS", "HTML", "React", "CSS", "JQuery", "MongoDB"],
        profileLinks: {
            linkedIn: "myLinkedInProfile",
            github: "myGitHUbProfile"
        },
        achievements: ["Achievement 1", "Achievement 2", "Achievement 3", "Achievement 4", "Achievement 5"],
        hobbies: ["hobby 1", "hobby 2", "hobby 3", "hobby 4"]
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
        let lcabout = JSON.parse(window.localStorage.getItem("about"));
        // let experienceDetails = JSON.parse(window.localStorage.getItem("experienceDetails"));
        // console.log(experienceDetails);
        let oldfinalDetails = this.state.finalDetails;
        console.log(this.state.finalDetails);
        this.setState({
            finalDetails: {
                ...oldfinalDetails,
                experienceDetails: lcexperienceDetails,
                educationDetails: lceducationDetails,
                contactDetails: lccontactDetails,
                about: lcabout,
                skills: lcskills,
            },
        });
    }

    render() {

        let {
            fname,
            lname,
            summary,
            email,
            phone,
            profession,
            houseNo,
            street,
            city,
            state,
            country,
            pin,
        } = this.state.contactDetails;
        let {
            collegeName,
            degree,
            cgpa,
            collegeCity,
            collegeState,
            graduationMonth,
            graduationYear,
            schoolName,
            class10,
            class12
        } = this.state.educationDetails;
        let experienceDetails = this.state.experienceDetails;
        let projects = this.state.projects;
        let POR = this.state.POR;
        let { linkedIn, github } = this.state.profileLinks;
        let skills = this.state.skills;
        let achievements = this.state.achievements;
        let hobbies = this.state.hobbies;
        let address = `House No. ${houseNo}, Street no. ${street}, ${city}, ${state}, ${country}, ${pin}.`;


        return (
            <divvv className="stl_ stl_02" ref={this.props.refProp}>
                <div className="stl_03">
                    <img
                        src="data:image/png;base64,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"
                        alt=""
                        className="stl_04"
                    />
                </div>
                <div className="stl_view">
                    <div className="stl_05 stl_06">
                        <div className="stl_01" style={{ left: "2.875em", top: "2.3224em" }}>
                            <span className="stl_07 stl_08 stl_09">STELLA WALKER &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "5.2621em" }}>
                            <span className="stl_10 stl_11 stl_09">
                                24 Armor Lane, North Easton, Ma 02356 (H) 508-278-2542 (C)
                                781-669-5989 jwalker@live.com &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "8.0746em" }}>
                            <span className="stl_12 stl_11 stl_09">
                                PROFESSIONAL SUMMARY &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "9.5746em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Successful sales professional with 10+ years experience in
                                large-scale food and retail environments. Implement cost control
                                measures &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "10.4496em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                to ensure operations remain within company targets. Maximize
                                bottom-line performance through PL, merchandising, staff manage
                                &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "11.3246em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                ment, loss control and inventory management. Successful sales
                                professional with 10+ years experience in large-scale food and
                                retail &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "12.1996em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                environments. Implement cost control measures to ensure operations
                                remain within company targets. Maximize bottom-line perfor- &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "13.0746em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                through P L. merchandising staff management loss control and
                                inventory management. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "15.5746em" }}>
                            <span className="stl_12 stl_11 stl_09">SKILLS &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "17.0746em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Executive team leadership &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "17.9496em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Inventory report generation &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "18.8246em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Client/Vendor relations &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "19.6996em" }}>
                            <span className="stl_13 stl_11 stl_09">Market analysis &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "15.75em", top: "17.0746em" }}>
                            <span className="stl_13 stl_11 stl_09">Sales Management &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "15.75em", top: "17.9496em" }}>
                            <span className="stl_13 stl_11 stl_09">Staff training &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "27em", top: "17.0746em" }}>
                            <span className="stl_13 stl_11 stl_09">Sales Management &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "27em", top: "17.9496em" }}>
                            <span className="stl_13 stl_11 stl_09">Staff training &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "15.75em", top: "18.8246em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Customer relations &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "15.75em", top: "19.6996em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Process improvements &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "27em", top: "18.8246em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Customer relations &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "27em", top: "19.6996em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Process improvements &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "22.5121em" }}>
                            <span className="stl_12 stl_11 stl_09">EXPERIENCE &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "24.0746em" }}>
                            <span className="stl_14 stl_11 stl_09">District Manager &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "24.9496em" }}>
                            <span className="stl_14 stl_11 stl_09">
                                Verizon Wireless | San Francisco, CA &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "26.0746em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Directed recruitment/training/staff development initiatives. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "32.875em", top: "26.5746em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                August 2011-Current &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "26.9496em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Successfully increased employee retention with a positive work
                                environment. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "27.8246em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Administered daily operations to ensure policies were adhered to by
                                sales staff. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "28.6996em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Cultivated strong business relationships with customers to drive
                                business &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "29.9496em" }}>
                            <span className="stl_14 stl_11 stl_09">District Manager &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "30.8246em" }}>
                            <span className="stl_14 stl_11 stl_09">
                                Verizon Wireless | San Francisco, CA &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "33.8125em", top: "31.5746em" }}>
                            <span className="stl_13 stl_11 stl_09">June 2008-2011 &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "31.8871em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Directed recruitment/training/staff development initiatives. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "32.7621em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Successfully increased employee retention with a positive work
                                environment. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "33.6371em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Administered daily operations to ensure policies were adhered to by
                                sales staff. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "34.5121em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Cultivated strong business relationships with customers to drive
                                business &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "35.6996em" }}>
                            <span className="stl_14 stl_11 stl_09">District Manager &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "36.5746em" }}>
                            <span className="stl_14 stl_11 stl_09">
                                Verizon Wireless | San Francisco, CA &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "33.6875em", top: "36.8871em" }}>
                            <span className="stl_13 stl_11 stl_09">August 2002-2007 &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "37.7621em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Directed recruitment/training/staff development initiatives. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "38.6996em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Successfully increased employee retention with a positive work
                                environment. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "39.5746em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Administered daily operations to ensure policies were adhered to by
                                sales staff. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3.9375em", top: "40.4496em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                Cultivated strong business relationships with customers to drive
                                business &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "2.875em", top: "43.0121em" }}>
                            <span className="stl_12 stl_11 stl_09">EDUCATION &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "3em", top: "44.5746em" }}>
                            <span className="stl_14 stl_11 stl_09">
                                Bachelor of Arts: Operational Managements &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "35.0625em", top: "44.5746em" }}>
                            <span className="stl_13 stl_11 stl_09">August 2011 &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "35.6875em", top: "46.6996em" }}>
                            <span className="stl_13 stl_11 stl_09">July 2002 &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "3em", top: "45.4496em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                San Francisco State University, San Francisco, CA &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3em", top: "46.6996em" }}>
                            <span className="stl_14 stl_11 stl_09">
                                Bachelor of Arts: Operational Managements &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3em", top: "47.5746em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                San Francisco State University, San Francisco, CA &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "3em", top: "49.1996em" }}>
                            <span className="stl_14 stl_11 stl_09">
                                Bachelor of Arts: Operational Managements &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "35.0625em", top: "49.1996em" }}>
                            <span className="stl_13 stl_11 stl_09">August 1998 &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "3em", top: "50.0746em" }}>
                            <span className="stl_13 stl_11 stl_09">
                                San Francisco State University, San Francisco, CA &nbsp;
                            </span>
                        </div>
                    </div>
                </div>
            </divvv >
        );
    }
}

export default Skin4;