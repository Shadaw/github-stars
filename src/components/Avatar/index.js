import styles from './avatar.module.css';

export const Avatar = ({ src, alt, ...rest }) => {
  return (
    <img className={styles.avatar} src={src} alt={alt} {...rest} />
  )
}
