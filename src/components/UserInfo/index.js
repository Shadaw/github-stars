import { Avatar } from '../Avatar';
import { Icon } from '../Icon';

import styles from './userInfo.module.css';

export const UserInfo = ({ user, orgs }) => {
  return (
    <div className={styles.userInfo}>
    <div>
      <Avatar src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.login}</p>
    </div>
    <div>
      {!!user.info && (
        <p>{user.bio}</p>
      )}
      <ul>
        {!!orgs.length && (
          <li>
            <Icon icon="person" />
            {orgs.map(org => `@${org.login}`).join(' ')}
          </li>
        )}
        {user.location && (
          <li>
            <Icon icon="mapPin" />
            {user.location}
          </li>
        )}
        {user.email && (
          <li>
            <Icon icon="mail" />
            {user.email}
          </li>
        )}
        {user.blog && (
          <li>
            <Icon icon="globe" />
            {user.blog.substr(0, 23)}
            ...
          </li>
        )}
      </ul>
    </div>
  </div>
  );
}
