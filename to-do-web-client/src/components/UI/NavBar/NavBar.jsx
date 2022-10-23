import React from 'react';
import { Link } from 'react-router-dom';
import css from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={css.navBar}>
        <div className={css.navBar_items}>
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