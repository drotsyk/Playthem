import React from 'react'
import { Header } from './Header/Header'
import { Button } from '../Button/Button'
import './Head.css'

export const Head = () => {
  return (
    <div className="head">
      <Header />
      <div className="head__box">
        <div className="head__content">
          <div className="head__title">Some start text</div>
          <div className="head__subtitle">
            Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident
          </div>
          <div className="head__btns">
              <Button text="Get Started Now" width="215px" height="50px"/>
              <Button text="Watch Now" height="50px" width="215px" shadow="none" background="inherit" border="1px solid #3CA6E3" color="#3CA6E3"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}
