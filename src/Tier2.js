import React, { Component } from "react";
import { getReducedColor, getRandomColor } from "./randomColorGenerator.js";
import Tier3 from "./Tier3";

export default class Tier2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childColor: getReducedColor(this.props.color)
    };
  }

  handleChildClick = () => {
    console.log("clicked");
    let a = getRandomColor();
    this.setState({ childColor: a });
  };

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div
        className="tier2"
        style={{ backgroundColor: this.props.color, color: this.props.color }}
      >
        <Tier3
          style={{ backgroundColor: this.state.childColor }}
          color={`${this.state.childColor}`}
          handleChildClick={this.handleChildClick}
        />
        <Tier3
          color={`${this.state.childColor}`}
          handleChildClick={this.handleChildClick}
        />
      </div>
    );
  }
}
