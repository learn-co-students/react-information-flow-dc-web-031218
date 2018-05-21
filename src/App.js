import React, { Component } from 'react'
import './App.css'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'

import Tier1 from './Tier1.js'

class App extends Component {

  constructor(props){
  	super(props);
  	const initialColorOne = getRandomColor();
  	const initialColorTwo = getRandomColor();
  	this.state = {
  		colorOne: initialColorOne,
  		colorTwo: initialColorTwo
  	}
  }

  render() {
  	let {colorOne, colorTwo} = this.state;
    return (
      <div className="App">
        <Tier1 color={colorOne}/>
        <Tier1 color={colorTwo}/>
      </div>
    )
  }
}

export default App
