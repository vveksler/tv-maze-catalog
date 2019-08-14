import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './ShowPreview.module.css'
class ShowPreview extends PureComponent {
  render() {
    const { id, name, image, summary } = this.props

    return (
      <div className={classNames(styles.container, 't-preview')}>
        <div>
          <Link
            to={`/shows/${id}`}
            className={classNames(styles.link, 't-link')}
          >
            {name}
          </Link>
          {image != null && <img src={image} alt={name} />}
        </div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>
    )
  }
}

export default ShowPreview

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
