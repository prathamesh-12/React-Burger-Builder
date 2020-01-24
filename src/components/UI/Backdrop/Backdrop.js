import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {

    return (
        props.isShow ? <div className="Backdrop" onClick={() => props.closeModal()}></div> : null
    );
}

export default backdrop;