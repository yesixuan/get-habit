import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import reducers from './store/index'
import demo from '../modules/demo/store'
import testSaga from '../modules/demo/test-saga/store'

const reducers = combineReducers({
  demo,
  testSaga
  // ... 更多子reducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f // 浏览器redux开发者工具支持
))

sagaMiddleware.run(rootSaga)

export default store
