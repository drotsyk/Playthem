import React, {useState} from 'react'
import { Button } from '../../Button/Button'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [burger, setBurger] = useState(false)
  const burgerList = ['Our Games', 'Platform', 'Use Cases', 'Pricing', 'Blog', 'Log In']
  return (
    <div>
      <header className="header">
        <Link to='/'><img src="./Assets/logo.svg" alt="" /></Link>
        <div className={burger ? "menu__btn menu__btn--open" : "menu__btn"} onClick={() => {
            setOpen(!open)
            setBurger(!burger)
          }}>
          <div className="menu__btn-lines"></div>
        </div>
          <ul className={open ? "menu__items menu__items--open": "menu__items"}>
            {burgerList.map((item, index) => (
              <li key={index} onClick={(e) => {
                e.preventDefault()
                setOpen(false)
                setBurger(false)
              }}><Link className="menu__item"  to={`/${item}`}  >{item}</Link></li>
            ))}
            <div className="header__btn" onClick={() => {
              setBurger(false)
              setOpen(false)
            }}>
              <Button text="Get Started Now"/>
            </div>
          </ul>
      </header>
    </div>
  )
}
