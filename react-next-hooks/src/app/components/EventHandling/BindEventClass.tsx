import React, { Component } from "react";

export default class BindEventClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hi Singh",
    };
    // this.clickHandler = this.clickHandler.bind(this)
  }

//   clickHandler() {
//     this.setState({
//       message: "Hi Kunal Singh",
//     });
//     console.log(this);
//   };

clickHandler = () =>{
    this.setState({
        message: "Hi Kunal Singh",
    })
}
  render() {
    return (
      <div>
        <p style={{ backgroundColor: "gray" }}>{this.state.message}</p>
        <button onClick={this.clickHandler.bind(this)}>click bind class</button><br></br>
        <button onClick={()=> this.clickHandler()}>click Arrao method</button><br></br>
        <button onClick={this.clickHandler}>click bind into constructor</button><br></br>
        <button onClick={this.clickHandler}>click to create Arrow fun</button><br></br>
      </div>
    );
  }
}
