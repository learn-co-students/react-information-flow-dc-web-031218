import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'

/*
  props = {
    color: ,
    handleChildClick: cbf()
  }
*/

export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleClick = () => {
    let newColor = getRandomColor();
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  handleChildClick = (e) =>{
    e.stopPropagation();
    let newColor = getRandomColor();
    this.setState({
      childColor: newColor
    }, ()=>console.log(this.state))
  }

  componentWillMount(){
    // console.log("Tier1::componentWillMount()");
    let reducedColor = getReducedColor(this.props.color)
    this.setState({
      color: this.props.color,
      childColor: reducedColor
    }, ()=>console.log("Tier 1 state",this.state))
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} 
           className="tier1" 
           style={{backgroundColor: this.state.color, color: "white"}}>
        Tier 1
        <Tier2 color={this.state.childColor} onClick={this.handleChildClick}/>
        <Tier2 color={this.state.childColor} onClick={this.handleChildClick}/>
      </div>

    )
  }
}
