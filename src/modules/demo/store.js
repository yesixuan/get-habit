export const DEMO_ADD_NUM = 'DEMO_ADD_NUM'
export const DEMO_MINUS_NUM = 'DEMO_MINUS_NUM'
export const DEMO_INCREMENT_ASYNC = 'DEMO_INCREMENT_ASYNC'

const initialState = {
  count: 0
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case DEMO_ADD_NUM:
      console.log('test-saga')
      return { count: state.count + 1 }
    case DEMO_MINUS_NUM:
      return { count: state.count - payload }
    default:
      return state
  }
}

// action creators
export function add() { // 无参action
  return {
    type: DEMO_ADD_NUM
  }
}
export function minus(data = 3) { // 带参action
  return {
    type: DEMO_MINUS_NUM,
    payload: data
  }
}

export const addAsync = params => ({
  type: DEMO_INCREMENT_ASYNC,
  payload: params
})

