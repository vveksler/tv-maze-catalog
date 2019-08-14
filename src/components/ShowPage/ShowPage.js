import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { showRequest, showSelector, isLoading, error } from 'ducks/shows'
import styles from './ShowPage.module.css'

class ShowPage extends PureComponent {
  componentDidMount = () => {
    const { showRequest, match } = this.props
    const id = match.params.id

    showRequest(id)
  }

  goBack = () => {
    this.props.history.goBack()
  }

  renderShow(show) {
    const { name, image, summary, cast } = show

    return (
      <div>
        <button onClick={this.goBack} className={styles.button}>
          Go back
        </button>
        <p>{name}</p>
        <img src={image} alt={name} />
        <div>
          <p dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div className={styles.cast}>
          {cast.map(person => (
            <div key={person.name} className={`${styles.person} t-person`}>
              <p>{person.name}</p>
              <img src={person.image} alt={person.name} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  render() {
    const { isLoading, error, show } = this.props

    return (
      <>
        {isLoading ? (
          <div>Retrieving data ...</div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          this.renderShow(show)
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  show: showSelector(state),
  isLoading: isLoading(state),
  error: error(state)
})

const mapDispatchToProps = {
  showRequest
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowPage)
)

// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
