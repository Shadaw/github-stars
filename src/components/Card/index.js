import { Icon } from '../Icon';

import styles from './card.module.css';

export const Card = ({ title, description, stars}) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <Icon icon="star" />
        <p>{stars}</p>
      </div>
    </div>
  )
}
