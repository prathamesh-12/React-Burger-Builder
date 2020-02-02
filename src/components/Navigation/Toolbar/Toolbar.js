import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div onClick={() => props.toggleSideDrawer()} className="DrawerToggle">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo height="80%"/>
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;