import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  state = {
    isAuth: false,
    mobile: false
    // isHomePage: false
  };
  componentWillReceiveProps(props) {
    this.setState({
      isAuth: props.isAuth,
    })
  }
  openNav = () => {
    let n1 = document.getElementById("myNav");
    console.log(n1);
  }
  closeNav = () => {
    let n2 = document.getElementById("myNav");
    console.log(n2);
  }
  componentDidMount() {
    // this.props.IsHomePage();
    // window.location.reload();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // true for mobile device
      document.getElementsByClassName("navbar")[0].style.background = "green";
    } else {
      // false for not mobile device
      // let navbar = document.getElementsByClassName("navbar");
      // console.log(navbar);
      // navbar[0].style.background="green"
      // document.getElementsByClassName("navbar")[0].style.background = "red";
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.mobile == false ? (<React.Fragment>
            <div id="myNav" className="overlay">
              <a href="javascript:void(0)" className="closebtn" onClick={()=>{this.closeNav()}}>&times;</a>
              <div class="overlay-content">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={()=>{this.openNav()}}>&#9776; open</span></React.Fragment>) : (<React.Fragment><div className={this.props.isTAPage ? "navbar2" : "navbar"}  >

              <div className={this.props.isTAPage ? "logo2" : "logo"} >
                <Link to="/">
                  <img src="./images/logo.png" alt="" />
                  <span style={{ marginLeft: "4%" }}>Resume Builder</span>
                </Link>
              </div>
              {this.state.isAuth ? (
                <div className={this.props.isTAPage ? "navlinks2" : "navlinks"}>
                  <ul>
                    <li>
                      <Link to="/templates">Templates</Link>
                    </li>
                    <li>
                      <Link to="/about-page">About</Link>
                    </li>
                    <li>
                      <Link to="/user-profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/myresume">My Resumes</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={this.props.logout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className={this.props.isTAPage ? "navlinks2" : "navlinks"} >
                  <ul>
                    <li>
                      <Link to="/about-page">About</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                      <Link to="/signin">Sign In</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div></React.Fragment>)
        }
      </React.Fragment>
    );
  }
}

export default Navbar;
