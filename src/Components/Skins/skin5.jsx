import React, { Component } from 'react';
import "./skin5.css";

class Skin5 extends Component {

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
            <div className="stl_ stl_02">
                <div className="stl_03">
                    <img
                        src="data:image/png;base64,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"
                        alt=""
                        className="stl_04"
                    />
                </div>
                <div className="stl_view">
                    <div className="stl_05 stl_06">
                        <div className="stl_01" style={{ left: "1.995em", top: "4.3147em" }}>
                            <span className="stl_07 stl_08 stl_09">S W &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "5.9851em", top: "3.4937em" }}>
                            <span className="stl_10 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                Stella Walker &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "6.2198em", top: "6.519em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                24Armor Lane, North Easton,Ma 02356 (H) 508-278-2542 (C)
                                781-669-5989 jwalker@live.com &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.7355em", top: "10.2743em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Successful sales professional with 10+ years experience in
                                large-scale food and retail environments. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.7355em", top: "11.3305em" }}>
                            <span className="stl_12 stl_08 stl_09" style={{ wordSpacing: "0em" }}>
                                Implement cost control measures to ensure operations remain within
                                company targets. Maximize &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "1.643em", top: "10.3386em" }}>
                            <span
                                className="stl_13 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Professional Summary &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.7355em", top: "12.3867em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                bottom-line performance through PL, merchandising, staff management,
                                loss control and inventory &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.7355em", top: "13.3256em" }}>
                            <span className="stl_12 stl_08 stl_11">management. &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "1.643em", top: "16.4411em" }}>
                            <span className="stl_13 stl_08 stl_09">Skills &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "12.909em", top: "16.5528em" }}>
                            <span
                                className="stl_12 stl_08 stl_11"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Executive team leadership &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.909em", top: "17.609em" }}>
                            <span className="stl_12 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                Inventory report generation &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.909em", top: "18.6652em" }}>
                            <span className="stl_12 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                Client/Vendor relations &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.909em", top: "19.7214em" }}>
                            <span className="stl_12 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                Market analysis &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "24.0577em", top: "16.5528em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Sales management &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "24.0577em", top: "17.609em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Staff training &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "24.0577em", top: "18.6652em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Customer relations &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "24.0577em", top: "19.7214em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Process Improvements &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "1.643em", top: "23.0129em" }}>
                            <span className="stl_13 stl_08 stl_11">Experience &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "23.0129em" }}>
                            <span
                                className="stl_14 stl_08 stl_11"
                                style={{ wordSpacing: "-0em" }}
                            >
                                AUGUST 2011-CURRENT &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "24.0691em" }}>
                            <span className="stl_14 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                District Manager &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "24.8906em" }}>
                            <span className="stl_14 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                Verizon Wireless | San Francisco, CA &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.3223em", top: "25.9999em" }}>
                            <span className="stl_12 stl_08 stl_09" style={{ wordSpacing: "0em" }}>
                                Directed recruitment/training/staff development initiatives. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.3223em", top: "27.0561em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Compute taxes owed and prepare tax returns, ensuring compliance with
                                reporting. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.3223em", top: "27.9949em" }}>
                            <span className="stl_12 stl_08 stl_09" style={{ wordSpacing: "0em" }}>
                                Administered daily operations to ensure policies were adhered to by
                                sales staff. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.3223em", top: "29.0511em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Cultivated strong business relationships with customers to drive
                                business. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "30.641em" }}>
                            <span className="stl_14 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                August 2009-2011 &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "31.4625em" }}>
                            <span className="stl_14 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                District Manager &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "32.5187em" }}>
                            <span className="stl_14 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                Verizon Wireless | San Francisco, CA &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.3223em", top: "33.4519em" }}>
                            <span className="stl_12 stl_08 stl_09" style={{ wordSpacing: "0em" }}>
                                Directed recruitment/training/staff development initiatives. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.3223em", top: "34.5081em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Compute taxes owed and prepare tax returns, ensuring compliance with
                                reporting. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.3223em", top: "35.5643em" }}>
                            <span className="stl_12 stl_08 stl_09" style={{ wordSpacing: "0em" }}>
                                Administered daily operations to ensure policies were adhered to by
                                sales staff. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "12.3223em", top: "36.6205em" }}>
                            <span
                                className="stl_12 stl_08 stl_09"
                                style={{ wordSpacing: "-0em" }}
                            >
                                Cultivated strong business relationships with customers to drive
                                business. &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "39.912em" }}>
                            <span className="stl_14 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                August 2011 &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "1.643em", top: "40.0294em" }}>
                            <span className="stl_13 stl_08 stl_11">Education &nbsp;</span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "41.256em" }}>
                            <span className="stl_12 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                Bachelor of Arts: Operational Managements &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "42.1948em" }}>
                            <span className="stl_12 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                San Francisco State University, San Francisco, CA &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "43.7847em" }}>
                            <span className="stl_14 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                August 2008 &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "44.7766em" }}>
                            <span className="stl_12 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                Bachelor of Arts: Operational Managements &nbsp;
                            </span>
                        </div>
                        <div className="stl_01" style={{ left: "11.4421em", top: "45.8328em" }}>
                            <span className="stl_12 stl_08 stl_11" style={{ wordSpacing: "0em" }}>
                                San Francisco State University, San Francisco, CA &nbsp;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skin5;