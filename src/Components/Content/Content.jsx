import React from 'react'
import { Button } from '../Button/Button'
import './Content.css'

export const Content = ({title, subtitle, listImg, padding, imgTitle, button}) => {
  return (
    <div className="content" style={{padding:padding}}>
      <div className="content__title">{title}</div> 
      {subtitle && (
        <div className="content__subtitle">{subtitle}</div>
      )}  
      {listImg && (
        <div className="content__list">
          {listImg.map((item,index) => (
            <div key={index} className="content__list-item">
              <img className="content__img" src={`./Assets/${item}.svg`} alt="" />
              {imgTitle && (
                <div className="content__list-title">{imgTitle}</div>
              )}
              {button && (
                <Button text={button} width="169px" height="50px"  shadow="none" background="inherit" border="1px solid #3CA6E3" color="#3CA6E3"/>
              )}
            </div>
          ))}
        </div>
      )}   
    </div>
  )
}
