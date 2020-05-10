import React, { Component } from "react";
import "./box.style.css";

export default class Box extends Component {
  state = {
    owner: "none",
  };
  handleClick = (props) => {
    if (this.state.owner === "none") {
      this.setState({ owner: props.user });
      props.changeState(props.index);
    }
  };
  renderShape() {
    if (this.state.owner === 1) return <div className="user-1"></div>;
    else if (this.state.owner === 2) return <div className="user-2"></div>;
    else return;
  }
  render(props) {
    //console.log(this.props.index);
    return (
      <div className={"box"} onClick={() => this.handleClick(this.props)}>
        {this.renderShape()}
      </div>
    );
  }
}
