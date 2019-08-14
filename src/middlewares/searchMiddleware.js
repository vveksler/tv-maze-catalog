import { search } from '../api'
import { searchRequest, searchSuccess, searchFailure } from 'ducks/search'

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    const query = action.payload
    search(query)
      .then(series => {
        store.dispatch(searchSuccess(series))
      })
      .catch(error => {
        store.dispatch(searchFailure(error.toString()))
      })
  }

  return next(action)
}

// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
