import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
	return (
        <div className="header">
            <nav>
			<NavLink to='/'>Photo Of The Day</NavLink>
            <NavLink to='/mars'>Mars Stuff</NavLink>
            </nav>
		</div>
	);
}

export default Header;
