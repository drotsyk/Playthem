import React from 'react'
import { Main } from './Main/Main'
import { Pricing } from './Pricing/Pricing'
import { Switch, Route } from 'react-router'
import { Platform } from './Platform/Platform'
import './App.css'

export const App = () => {
 
  return (
    <div >
      <Switch>
        <Route path="/Our Games">
          <Main />
        </Route>
        <Route path="/Platform">
          <Platform />
        </Route>
        <Route path="/Use Cases">
          <Main />
        </Route>
        <Route path="/Pricing">
          <Pricing />
        </Route>
        <Route path="/Blog">
          <Platform />
        </Route>
        <Route path="/Log In">
          <Main />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  )
}
