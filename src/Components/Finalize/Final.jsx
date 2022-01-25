import React, { Component } from "react";
import ReactToPdf from "react-to-pdf";
import "./Final.css";
import Resume1 from "./Resume1";
import Skin1 from "../Skins/skin1";
import Skin2 from "../Skins/skinv"
class Final extends React.Component {
  resume = React.createRef();
  state={
      skinId:""
  }
  componentDidMount() {
      let skinId = JSON.parse(localStorage.getItem("skinId"));
      if(skinId){
          this.setState({
              skinId:skinId
          })
      }
  }
  render() {
    let skint = this.state.skinId;
    if (skint == "skin1") {
        skint = <Skin1 refProp={this.resume} ></Skin1>
    }else if(skint=="skinv"){
        skint = <Skin2 refProp={this.resume}></Skin2>
    } 
    else {
        skint = <Resume1 refProp={this.props.resume} ></Resume1>
    }
    return (
      <div className="final">
        {/* <h1 style={{"margin-left":"300px"}}>Your Final Resume Is Here</h1> */}
        <div className="resume-view-container">
          <div className="resume-view">
          <React.Fragment>
            {skint}
          </React.Fragment>
          </div>
          <ReactToPdf targetRef={this.resume} filename="resume.pdf">
            {({ toPdf }) => (
              <div className="download-view">
                <div className="download-btn"onClick={toPdf}>Download Resume</div>
                <div className="download-btn">Save Resume</div>
              </div>
              
            )}
          </ReactToPdf>
          
        </div>
        
      </div>
    );
  }
}

export default Final;
