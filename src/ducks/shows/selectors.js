import { getEmptyImage } from '../utils.js'
import { createSelector } from 'reselect'

export const showSelector = createSelector(
  state => state.shows.show,
  show => {
    if (Object.keys(show).length === 0) return show

    const { name, image, summary, _embedded } = show

    const cast = _embedded.cast.map(({ person }) => ({
      name: person.name,
      image: getEmptyImage(person.image)
    }))

    return { name, image: getEmptyImage(image), summary, cast: cast }
  }
)

export const isLoading = state => state.shows.loading
export const error = state => state.shows.error
