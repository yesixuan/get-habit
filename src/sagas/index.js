import { all } from 'redux-saga/effects'

// 一些同步逻辑
import { watchIncrementAsync } from '../modules/demo/sagas'
// ... 更多

// 单一进入点，一次启动所有 Saga
export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
    // ... 更多
  ])
}