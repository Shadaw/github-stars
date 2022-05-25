import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from '../../components/Logo';
import { SearchBar } from '../../components/SearchBar';

import styles from './home.module.css';

export const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState('');

  const handleChangeUser = useCallback((event) => {
    setUser(event.target.value);
  }, [setUser]);

  const handleRedirect = useCallback(() => {
    navigate(`user/${user}`);
  }, [navigate, user]);

  return (
    <section className={styles.container}>
      <Logo />
      <SearchBar
        placeholder="github username..."
        value={user}
        onSubmit={handleRedirect}
        onChange={handleChangeUser}
      />
    </section>
  )
}
