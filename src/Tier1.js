import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      tier2Color: getReducedColor(initialColor),
      tier3ColorOne: getReducedColor(getReducedColor(initialColor)),
      tier3ColorTwo: getReducedColor(getReducedColor(initialColor))
    }
  }

  changeState = (e) => {
    if(e.target.className === 'tier1') {
      let newColor = getRandomColor()
      this.setState({
        color: newColor,
        tier2Color: getReducedColor(newColor),
        tier3ColorOne: getReducedColor(getReducedColor(newColor)),
        tier3ColorTwo: getReducedColor(getReducedColor(newColor))
      })
    } else if(e.target.className === 'tier2') {
      let newColor = getRandomColor()
      this.setState({
        tier2Color: newColor,
        tier3ColorOne: getReducedColor(newColor),
        tier3ColorTwo: getReducedColor(newColor)
      })
    } else if (e.target.className === 'tier3' && e.target.parentElement.id === "one"){

      let newColor = getRandomColor()
      this.setState({
        tier3ColorOne: newColor
      })
    } else if(e.target.className === 'tier3' && e.target.parentElement.id === "two") {
      let newColor = getRandomColor()
      this.setState({
        tier3ColorTwo: newColor
      })
    }
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.changeState} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 id="one" tier2Color={this.state.tier2Color} tier3Color={this.state.tier3ColorOne} />
        <Tier2 id="two" tier2Color={this.state.tier2Color} tier3Color={this.state.tier3ColorTwo} />
      </div>
    )
  }
}
