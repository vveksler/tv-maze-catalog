// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import { show } from '../api'
import { showRequest, showSuccess, showFailure } from 'ducks/shows'

export default store => next => action => {
  if (action.type === showRequest.toString()) {
    const id = action.payload
    show(id)
      .then(show => {
        store.dispatch(showSuccess(show))
      })
      .catch(error => {
        store.dispatch(showFailure(error.toString()))
      })
  }

  return next(action)
}
