import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebaseApp from "../../firebase/firebaseConfig";
import { contactCodes } from "../../util/codes";
import Skin1 from "../Skins/skin1";
import "./Contact.css";

class Contact extends Component {
  state = {
    codes: [
      "fname",
      "lname",
      "summary",
      "email",
      "phone",
      "profession",
      "street",
      "city",
      "state",
      "country",
      "pin",
    ],
    contactDetails: {
      fname: "",
      lname: "",
      summary: "",
      email: "",
      phone: "",
      profession: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pin: "",
    },
    skinPath: null,
    skinId: null,
  };

  onChangeHandler = (e) => {
    // console.log(contactCodes);
    let id = e.target.id;
    let value = e.target.value;
    let oldContactDetails = this.state.contactDetails;
    this.setState({
      contactDetails: {
        ...oldContactDetails,
        [id]: value,
      },
    });
  };

  componentDidMount() {
    let skinPath = JSON.parse(localStorage.getItem("skinPath"));
    console.log("skinId=>>>" + skinPath);
    this.setState({
      skinPath: skinPath,
    });
    let userContactDetails = JSON.parse(localStorage.getItem("contactDetails"));
    // console.log(userContactDetails);
    if (userContactDetails) {
      // console.log("bcfihhewbvdfchuwechuvewc");
      this.setState({
        contactDetails: {
          ...userContactDetails,
        }
      });
      let fname = document.getElementById("fname");
      fname.value = userContactDetails.fname;
      let lname = document.getElementById("lname");
      lname.value = userContactDetails.lname;
      let phone = document.getElementById("phone");
      phone.value = userContactDetails.phone;
      let pin = document.getElementById("pin");
      pin.value = userContactDetails.pin;
      let email = document.getElementById("email");
      email.value = userContactDetails.email;
      let state = document.getElementById("state");
      state.value = userContactDetails.state;
      let city = document.getElementById("city");
      city.value = userContactDetails.city;
      let summary = document.getElementById("summary");
      summary.value = userContactDetails.summary
      let profession = document.getElementById("profession");
      profession.value = userContactDetails.profession;
    }
  }


  nextButtonHandler = async () => {
    console.log("next button clicked !!");

    let oldContactDetails = this.state.contactDetails ;
    localStorage.setItem(
      "contactDetails",
      JSON.stringify(oldContactDetails)
    );
    
  };

  render() {
    return (
      <div className="contact-details-container">
        <div className="contact-form">
          <div className="headings">
            <h3>What’s the best way for employers to contact you?</h3>
            <h5>We suggest including an email and phone number.</h5>
          </div>
          <div className="form-container">
            <div className="form">
              <div className="details">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    required="required"
                    class="form-control"
                    id="fname"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">First Name</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="lname"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Last Name</label>
                </div>
              </div>
              {/* ///// */}
              <div className="details">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="phone"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Phone Number</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    required="required"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Email Address</label>
                </div>
              </div>
              {/* /// */}
              <div class="form-floating mb-3 diff">
                <input
                  type="text"
                  required="required"
                  class="form-control"
                  id="summary"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    this.onChangeHandler(e);
                  }}
                ></input>
                <label for="floatingInput">Summary</label>
              </div>
              <div class="form-floating mb-3 diff">
                <input
                  type="text"
                  required="required"
                  class="form-control"
                  id="profession"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    this.onChangeHandler(e);
                  }}
                ></input>
                <label for="floatingInput">Profession</label>
              </div>
              {/* /// */}
              <div className="details">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    required="required"
                    class="form-control"
                    id="city"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">City</label>
                </div>

                <div class="form-floating mb-3 ">
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="state"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">State</label>
                </div>
                <div
                  class="form-floating mb-3"
                  style={{ "margin-right": "2%" }}
                >
                  <input
                    type="text"
                    required="required"
                    class="form-control"
                    id="pin"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      this.onChangeHandler(e);
                    }}
                  ></input>
                  <label for="floatingInput">Zip Code</label>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-conatiner">
            <Link to="/templates">
              <div className="btn1">Back</div>
            </Link>
            <Link to="/edu">
              <div className="btn1" onClick={this.nextButtonHandler}>Next</div>
            </Link>
          </div>
        </div>
        <div className="skin-image">
          <div className="skin-img-container">
            <img src={this.state.skinPath} alt="" />
          </div>
          {/* <div className="btn"></div> */}
        </div>
      </div>
    );
  }
}

export default Contact;
