import React from 'react'

const Display = ({addColor , isDarkText}) => {
  const boxStyle = {backgroundColor:addColor,
  color:isDarkText ? "#000" : "#FFF"}
  return (
    <div className='display' style={boxStyle}>
      <p>{addColor ? addColor : "Empty Value"}</p>
    </div>
  )
}

export default Display