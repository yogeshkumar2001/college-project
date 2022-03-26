import React, { Component } from 'react';
import "./WbAbout.css";
class WbAbout extends Component {
    state = {}
    render() {
        return (

            <div className="about-us-container" onLoad={this.props.IsHomePage} >
                <div className="about-bg">
                    <img src="./images/bread.jpg" alt="" />
                </div>
            </div>
        );
    }
}

export default WbAbout;