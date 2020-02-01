import React from 'react';
import './Logo.css';
import BurgerLogo from '../../assets/Images/burger-logo.png';

const Logo = (props) => {
    return (
        <div className="Logo" style={{height: props.height}}>
            <img src={BurgerLogo} alt="BurgerLogo"/>
        </div>
    );
}

export default Logo;