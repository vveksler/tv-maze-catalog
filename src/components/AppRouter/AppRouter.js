// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React, { PureComponent } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import Search from '../Search'
import ShowPage from '../ShowPage'
import './AppRouter.css'

class AppRouter extends PureComponent {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    )
  }
}

export default withRouter(AppRouter)
