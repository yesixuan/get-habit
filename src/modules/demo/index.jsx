import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Default from './default'
import TestSaga from './test-saga'

function Index({ match }) {
  return (
    <div>
      <header>
        <Link to={`${match.url}/saga`}>redux-saga 演示页</Link>
      </header>
      <Switch>
        <Route path={`${match.path}`} exact component={Default} />
        <Route path={`${match.path}/saga`} component={TestSaga} />
      </Switch>
    </div>
  )
}

export default Index
