import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
	return (
		<div className="header">
			<NavLink to='/'>Photo Of The Day</NavLink>
			<NavLink to='/mars'>Mars Stuff</NavLink>
		</div>
	);
}

export default Header;
