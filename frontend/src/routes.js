import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main'
import ClientUpdate from './pages/ClientUpdate'
import ClientCreate from './pages/ClientCreate'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/clientes" exact component={ClientCreate}/>
        <Route path="/clientes/:id" exact component={ClientUpdate}/>
      </Switch>
    </BrowserRouter>
  )
}