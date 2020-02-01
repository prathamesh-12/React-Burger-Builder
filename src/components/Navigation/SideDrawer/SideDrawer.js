import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/auxillary';

const SideDrawer = (props) => {

    const classes = ["SideDrawer", props.isShow ? "Open" : "Close"].join(' ');

    return (
        <Auxillary>
            <Backdrop isShow={props.isShow} closeModal={props.toggleSideDrawer}></Backdrop>
            <div className={classes}>
                <Logo height="10%"/>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxillary>
    );
}

export default SideDrawer;
