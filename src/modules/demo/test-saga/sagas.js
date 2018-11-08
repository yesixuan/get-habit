import { delay } from 'redux-saga'
import { put, call, takeEvery, all } from 'redux-saga/effects'
import { add } from './store'
import { DEMO_TESTSAGA_INCREMENT_ASYNC } from './store'

// 我们的干活的 Saga: 将执行 异步加一 。
function* incrementAsync(action) {
  console.log('action', action)
  for(let i = 0; i < 3; i++) {
    yield call(delay, 500)
    yield put(add())
  }
}

// 我们监视的 Saga: 每个调用 INCREMENT_ASYNC 的动作将触发 异步加一 的5毛特效。
export default function* watchIncrementAsync() {
  yield all([
    takeEvery(DEMO_TESTSAGA_INCREMENT_ASYNC, incrementAsync)
  ])
}