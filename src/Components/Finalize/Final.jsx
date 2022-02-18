import React, { Component } from "react";
import ReactToPdf from "react-to-pdf";
import "./Final.css";
import Resume1 from "./Resume1";
import Skin1 from "../Skins/skin1";
import Skin2 from "../Skins/skinv";
import Skin3 from "../Skins/Skin3";
import Skin4 from "../Skins/skin4";
// import Skin5 from "../Skins/skin5";
class Final extends React.Component {
  resume = React.createRef();
  state={
    skinId : "",
  }
componentDidMount() {
  console.log("inside cdm of final.jsx");
  let lcSkinId = JSON.parse(localStorage.getItem("skinId"));
  console.log(lcSkinId);
  if(lcSkinId){
    this.setState({
      skinId : lcSkinId
    })
  }
}
  render() {
    console.log("isnide final");
    let skinId = this.state.skinId;
    let tskin;
    if(skinId == "skin1"){
      tskin = <Skin1 refProp={this.resume}></Skin1>
    }else if(skinId == "skin2"){
      tskin = <Skin2 refProp={this.resume}></Skin2>
    }else if(skinId=="skin3"){
      tskin = <Skin3 refProp={this.resume}></Skin3>
    }else if(skinId == "skin4"){
      tskin = <Skin4 refProp={this.resume}></Skin4>
    }else if(skinId == "skin5"){
      // tskin = <Skin5></Skin5>
    }
    else{
      tskin = <Resume1 refProp={this.resume}></Resume1>
    }
    console.log(tskin);
    return (
      <div className="final">
        {/* <h1 style={{"margin-left":"300px"}}>Your Final Resume Is Here</h1> */}
        <div className="resume-view-container">
          <div className="resume-view">
           <React.Fragment>
             {tskin}
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
