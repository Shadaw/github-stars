import { Icon } from "../Icon"

import styles from './notFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <Icon icon="notFound" />
      <p>User not found</p>
    </div>
  )
}
