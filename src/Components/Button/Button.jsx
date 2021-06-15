import React from 'react'
import './Button.css'

export const Button = ({text, background, color,height, border, width, shadow }) => {
  let styleLink = {
    boxShadow:shadow,
    height:height, 
    background:background,
    border:border,
    color:color, 
    minWidth:width,
  }
  return (
    <>
      <button 
        className="btn"  
        style={styleLink}
      >
        {text}
      </button>
    </>
  )
}
