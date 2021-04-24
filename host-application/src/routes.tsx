import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import Home from 'src/pages/Home'
import Authors from 'src/pages/Authors'
import Books from 'src/pages/Books'

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/authors' component={Authors} />
        <Route path='/books' component={Books} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;