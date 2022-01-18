import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends Component {
    // state = { isAuth : this.props.isAuth ==true ? (true) : (false)}
    state={
        isAuth : false
    }

   
componentDidMount(){
    let userAuth = JSON.parse(localStorage.getItem("isAuth"));
    if(userAuth){
      this.setState({
        isAuth : true
      })
    }
}

    render() { 
        return ( <div className="landing">
            <div className="landing-content">
                <h1>Resume Templates</h1>
                <p>Pick a resume template, fill it out, and format. Create a professional resume in a few clicks. Just choose one of 18+ resume templates below, add ready-made content, download, and get the job.</p>
            </div>
            <div className="choose-templates">
                {this.state.isAuth ?
                <Link to="/templates">
                    <button className="btn">Choose Templates</button> 
                </Link> :
                <Link to="/signin">
                <button className="btn">Choose Templates</button> 
                </Link>}
            </div>
        </div> );
    }
}
 
export default LandingPage;