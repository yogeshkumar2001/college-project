import React, { Component } from 'react';
import "./skin3.css";
class Skin3 extends Component {
    state = {
        contactDetails: {
            fname: "Ishika",
            lname: "Goel",
            summary:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni, perspiciatis,placeat quidem ipsum officiis, nemo mollitia optio labore hic maiores repudiandae est debitis inventore vel pariatur deleniti? Obcaecati, odit!",
            email: "ishikagoel@gmail.com",
            phone: "+91 7537285630",
            profession: "Software Engineer",
            street: "Kavi nagar",
            city: "Ghaziabad",
            state: "Uttar Pradesh",
            country: "India",
            pin: "201001",
        },
        educationDetails: {
            collegeName: "Indira Gandhi Delhi Technical University for Women",
            degree: "Bachelor of Technology in Computer Science",
            cgpa: "8.5",
            collegeCity: "New Delhi",
            collegeState: "Delhi",
            collegeCountry: "India",
            duration: "2018 - 2022",
        },
        experienceDetails: [
            {
                companyName: "Google",
                duration: "June 2019 - July 2019",
                position: "Software Engineer Intern",
                role:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia.",
            },
            {
                companyName: "Microsoft",
                duration: "June 2020 - July 2020",
                position: "Software Engineer Intern",
                role:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia.",
            },
            {
                companyName: "Deutsche Bank",
                duration: "June 2021 - July 2021",
                position: "Software Engineer Intern",
                role:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia.",
            },
        ],
        projects: [
            {
                projectName: "Project 1",
                techStack: ["ahjfex", "fdghuij", "vsfajgkhj"],
                summary:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi, repellat similique enim ipsum laudantium reiciendis voluptates, deleniti pariatur, excepturi aspernatur nihil minima repellendus a ad.",
                projectLink: "www.gxdefyb.com",
            },
            {
                projectName: "Project 2",
                techStack: ["rehjk", "wetyfug", "dsfghvjbn"],
                summary:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, id. Minus quia libero nesciunt. Quas, sed neque cum molestiae consectetur magnam omnis dolore corrupti nam laboriosam nostrum vero, assumenda minus!",
                projectLink: "www.tewghio.com",
            },
            {
                projectName: "Project 3",
                techStack: ["qewrfyguh", "rdftygu", "dfg"],
                summary:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quis vero commodi beatae, temporibus itaque alias? Rerum repudiandae nesciunt quos quae, quasi sequi repellat commodi eligendi.",
                projectLink: "www.fegyuh.com",
            },
        ],
        skills: {
            language: ["C/C++", "Java", "Javascript"],
            frameworks: ["ceay", "xqehgrt", "zrtqyu"],
            software: ["ev3y2qj", "e23vg", "3v2hz1"],
            ide: ["wyixl", "q2zdfgh", "zwscj"],
        },
        profileLinks: {
            linkedIn: "www.linkedin.com/ishikegoel",
            github: "www.github.com/ishikagoel",
        },
        achievements: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam vero doloremque cumque molestiae, adipisci, sint quod consequatur cupiditate fuga veritatis nemo aperiam. Quasi, incidunt laudantium.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam vero doloremque cumque molestiae, adipisci, sint quod consequatur cupiditate fuga veritatis nemo aperiam. Quasi, incidunt laudantium.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam vero doloremque cumque molestiae, adipisci, sint quod consequatur cupiditate fuga veritatis nemo aperiam. Quasi, incidunt laudantium.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam vero doloremque cumque molestiae, adipisci, sint quod consequatur cupiditate fuga veritatis nemo aperiam. Quasi, incidunt laudantium.",
        ],
        hobbies: [
            "xquvyutyiomqz hgqwefh",
            "yavjuwtbhzqd",
            "zqfiuykewiql",
            "zqerc",
            "zqfjyuzq zqfdjtyfmjg",
        ],
    };
    render() {
        let {
            fname,
            lname,
            summary,
            email,
            phone,
            profession,
            street,
            city,
            state,
            country,
            pin,
        } = this.props.contactDetails ? this.props.contactDetails : this.state.contactDetails;

        let {
            collegeName,
            degree,
            cgpa,
            collegeCity,
            collegeState,
            collegeCountry
        } = this.props.educationDetails ? this.props.educationDetails : this.state.educationDetails;


        let experienceDetails = this.state.experienceDetails;
        let projects = this.state.projects;
        let skills = this.state.skills;
        let profileLinks = this.state.profileLinks;
        let achievements = this.state.achievements;
        let hobbies = this.state.hobbies;
        return (
            <div class="skin5-cont">
                <div class="skin5-incon">
                    <div class="skin5b1">
                        <div class="hbox1">
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

export default Skin3;
