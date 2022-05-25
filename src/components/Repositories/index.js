import { Card } from '../Card';

import styles from './repositories.module.css';

export const Repositories = ({ repositories }) => {
  return (
    <div className={styles.repositories}>
      {repositories.map(repository => (
        <Card
          key={repository.id}
          title={repository.name}
          description={repository.description}
          stars={repository.stargazers_count}
        />
      ))}
    </div>
  )
}
