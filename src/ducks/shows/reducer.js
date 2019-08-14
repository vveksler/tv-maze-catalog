import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { showRequest, showSuccess, showFailure } from './actions'

const show = handleActions(
  {
    [showSuccess]: (_state, { payload }) => payload
  },
  {}
)

const loading = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  true
)

const error = handleActions(
  {
    [showFailure]: (_state, { payload }) => payload
  },
  null
)

export default combineReducers({
  show,
  loading,
  error
})
