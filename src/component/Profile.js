import React, { Component } from "react";


export default class Profile extends Component {
  constructor() {
    console.log("initialization");
    super();
    this.state = {
      fullName:"Zaghdoudi Chaima",
      profession:"web developper",
      imgSrc:'1.jpg',
      bio:"Développeur full stack ",
      time: new Date(),
    };
  }
  componentDidMount() {

    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 2000);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("render");
    return (
      
       <div >
        <h1>{this.state.fullName}</h1>
        
        <h3>{this.state.profession}</h3>
      
        <img className= "img1" src={this.state.imgSrc} alt=''/>
        
        <h3>{this.state.bio}</h3>
        
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}