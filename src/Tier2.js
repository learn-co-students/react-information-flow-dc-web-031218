import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


/*
  props = {
    color: ,
    onClick: cbf()
  }
*/
export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }
  handleChildClick = (e) =>{
    e.stopPropagation();
    let newColor = getRandomColor();
    this.setState({
      childColor: newColor
    }, ()=>console.log(this.state))
  }
  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" 
           style={{backgroundColor: this.props.color, color: "white"}}
           onClick={this.props.onClick}
      >
        Tier 2
        <Tier3 color={this.state.childColor} onClick={this.handleChildClick}/>
        <Tier3 color={this.state.childColor} onClick={this.handleChildClick}/>
      </div>
    )
  }
}
