import React from 'react'

/*
	props = {
		color: ,
		onClick: cbf()
	}
*/

const Tier3 = (props) => {
	return (
	  // this component does not need to change (but feel free to change however you like!)
	  <div className="tier3" 
	  style={{backgroundColor: props.color, color:"white"}}
	  onClick={props.onClick}>
	  Tier 3
	  </div>
	)
}

export default Tier3
