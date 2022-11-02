import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/context';
import MyButton from '../Buttons/MyButton';
import css from './NavBar.module.css'

const NavBar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const router = useNavigate();

    const logout = (event) => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.setItem("auth", "false")
        router('/login');
    }

    return (
        <div className={css.navBar}>
        <div className={css.navBar_items}>
          <MyButton onClick={logout}>Выйти</MyButton>
          <Link className={css.navBar_item} to="/about">
            About
          </Link>
          <Link className={css.navBar_item} to="/posts">
            Posts
          </Link>
        </div>
      </div>
    );
};

export default NavBar;