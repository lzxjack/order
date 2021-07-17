// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Nav = () => {
    return (
        <nav>
            <NavLink to="/cook" activeClassName="active-cook" className="nav-item">
                做菜
            </NavLink>
            <NavLink to="/takeout" activeClassName="active-takeout" className="nav-item">
                外卖
            </NavLink>
        </nav>
    );
};

export default Nav;
