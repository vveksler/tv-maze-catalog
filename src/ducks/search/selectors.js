import { getEmptyImage } from '../utils.js'
import { createSelector } from 'reselect'

export const seriesSelector = createSelector(
  state => state.search.series,
  series =>
    series.map(({ id, name, image, summary }) => ({
      id,
      name,
      summary,
      image: getEmptyImage(image)
    }))
)

export const isLoading = state => state.search.loading
export const error = state => state.search.error
