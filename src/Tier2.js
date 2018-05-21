import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


const Tier2 = props => {
  return (
    <div id={props.id} className="tier2" style={{backgroundColor: props.tier2Color, color: props.tier2Color}}>
      <Tier3 tier3Color={props.tier3Color} />
      <Tier3 tier3Color={props.tier3Color} />
    </div>
  )
}

export default Tier2
