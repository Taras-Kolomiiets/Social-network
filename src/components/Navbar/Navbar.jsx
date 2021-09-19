import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" href="" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" href="" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" href="" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" href="" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" href="" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" href="" activeClassName={s.activeLink}>
          Users
        </NavLink>
      </div>
      <Friends friends={props.friends} />
    </nav>
  );
};

export default Navbar;
