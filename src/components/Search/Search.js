import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ShowPreview from '../ShowPreview'
import { seriesSelector, isLoading, error, searchRequest } from 'ducks/search'
import classNames from 'classnames'
import styles from './Search.module.css'

class Search extends PureComponent {
  state = {
    value: ''
  }

  handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      this.handleSearch()
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      value
    })
  }

  handleSearch = () => {
    const { searchRequest } = this.props
    const { value } = this.state

    if (value) searchRequest(value)
  }

  render() {
    const { value } = this.state
    const { series, isLoading, error } = this.props

    return (
      <>
        {isLoading ? (
          <p>Searching ...</p>
        ) : (
          <>
            <div className={styles.previewList}>
              <input
                type="text"
                value={value}
                className={classNames(styles.input, 't-input')}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
                placeholder="Назвние сериала"
              />
              <div className={styles.buttonWrapper}>
                <button
                  onClick={this.handleSearch}
                  className={classNames(styles.button, 't-search-button')}
                >
                  Найти
                </button>
              </div>
            </div>
            <div className={classNames(styles.searchPanel, 't-search-result')}>
              {error ? <div>{error}</div> : this.showPreviews(series)}
            </div>
          </>
        )}
      </>
    )
  }

  showPreviews = series => {
    return series.map(({ id, name, summary, image }) => (
      <ShowPreview key={id} {...{ id, name, summary, image }} />
    ))
  }
}

const mapStateToProps = state => ({
  series: seriesSelector(state),
  isLoading: isLoading(state),
  error: error(state)
})

const mapDispatchToProps = {
  searchRequest
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
)

// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
