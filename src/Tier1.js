import React, { Component } from "react";
import { getRandomColor, getReducedColor } from "./randomColorGenerator.js";
import Tier2 from "./Tier2";

export default class Tier1 extends Component {
  constructor(props) {
    super(props);
    const initialColor = getRandomColor();
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    };
  }

  handleChildClick = () => {
    console.log("clicked");
    let a = getRandomColor();
    this.setState({ childColor: a });
  };

  handleParentClick = () => {
    let a = getRandomColor();
    this.setState({ color: a, childColor: getReducedColor(a) });
  };

  handleClick = e => {
    e.stopPropagation();
    if (e.target.classList.contains("tier1")) {
      this.handleParentClick();
    } else if (e.target.classList.contains("tier2")) {
      this.handleChildClick();
    }
  };

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div
        onClick={this.handleClick}
        className="tier1"
        style={{ backgroundColor: this.state.color, color: this.state.color }}
      >
        <Tier2
          color={`${this.state.childColor}`}
          onClick={this.handleChildClick}
        />
        <Tier2
          color={`${this.state.childColor}`}
          onClick={this.handleChildClick}
        />
      </div>
    );
  }
}
