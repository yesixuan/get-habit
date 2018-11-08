import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { MuiThemeProvider, theme } from './theme'

import './assets/styles/index.styl'
import Index from './modules/index'
import Demo from './modules/demo/index'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  (<MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/index' component={Index}/>
          <Route path='/demo' component={Demo}/>
          <Redirect to='/index' />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>),
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate() { console.log('service worker update!!!') },
  onSuccess() { console.log('service worker register success!!!') }
});
