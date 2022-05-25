import { useCallback } from 'react';
import { Icon } from '../Icon';

import styles from './searchbar.module.css';

export const SearchBar = ({ onSubmit, outline, ...rest }) => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    onSubmit();
  }, [onSubmit]);

  return (
    <>
      {!outline && (
        <form onSubmit={handleSubmit} className={styles.container}>
          <input type="text" {...rest} />
          <button type='submit'>
            <Icon icon="search" />
          </button>
        </form>
      )}
      {outline && (
        <form onSubmit={handleSubmit} className={styles.outline}>
          <input type="text" {...rest} />
          <button type='submit'>
            <Icon icon="search" />
          </button>
        </form>
      )}
    </>
  )
}
