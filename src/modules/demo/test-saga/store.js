export const DEMO_TESTSAGA_ADD_NUM = 'DEMO_TESTSAGA_ADD_NUM'
export const DEMO_TESTSAGA_MINUS_NUM = 'DEMO_TESTSAGA_MINUS_NUM'
export const DEMO_TESTSAGA_INCREMENT_ASYNC = 'DEMO_TESTSAGA_INCREMENT_ASYNC'

const initialState = {
  count: 0
}

// reducer
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case DEMO_TESTSAGA_ADD_NUM:
      return { count: state.count + 1 }
    case DEMO_TESTSAGA_MINUS_NUM:
      return { count: state.count - payload }
    default:
      return state
  }
}

// action creators
export function add() { // 无参action
  return {
    type: DEMO_TESTSAGA_ADD_NUM
  }
}
export function minus(data = 3) { // 带参action
  return {
    type: DEMO_TESTSAGA_MINUS_NUM,
    payload: data
  }
}

export const addAsync = params => ({
  type: DEMO_TESTSAGA_INCREMENT_ASYNC,
  payload: params
})

