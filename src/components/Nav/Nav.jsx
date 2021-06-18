import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <div className={styles.navBar}>
      <Link to='/search'>
        <p>Search</p>
      </Link>
      <Link to='/saved'>
        <p>Saved</p>
      </Link>
    </div>
    </>
  );
};

export default Nav;
