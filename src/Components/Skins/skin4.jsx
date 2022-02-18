import React, { Component } from "react";
import "./skin4.css";
class Skin4 extends Component {
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
