import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import { useQuery } from '../../hooks/query';
import { getUser } from '../../services/getUser';

import { Logo } from '../../components/Logo';
import { SearchBar } from '../../components/SearchBar';
import { UserInfo } from '../../components/UserInfo';
import { Repositories } from '../../components/Repositories';
import { NotFound } from '../../components/NotFound';

import styles from './user.module.css';

export const User = () => {
  const navigate = useNavigate();
  const urlUser = useQuery(useLocation())

  const [user, setUser] = useState(() => urlUser) ;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleRequestUser(user);
  }, []);

  const handleRequestUser = useCallback(async () => {
    navigate(`../user/${user}`);
    setLoading(true);

    const { error, data } = await getUser(user);

    setLoading(false);

    if(error) {
      setError(true);
      return;
    }

    setError(false);

    setData(data);
  }, [setLoading, user, setData, navigate]);

  const handleChangeUser = useCallback((event) => {
    setUser(event.target.value);
  }, [setUser]);

  return (
    <section className={styles.container}>
      <header>
        <Logo />
        <SearchBar
          value={user}
          onChange={handleChangeUser}
          onSubmit={handleRequestUser}
          placeholder="github username..."
          outline
        />
      </header>
      {(!loading && !error) && (
        <div className={styles.wrapper}>
          <UserInfo user={data.user} orgs={data.orgs} />
          <Repositories repositories={data.repositories} />
        </div>
      )}
      {!loading && error && (
        <NotFound />
      )}
    </section>
  )
}
