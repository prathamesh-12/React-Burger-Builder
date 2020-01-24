import React from 'react';
import Auxillary from '../../../hoc/auxillary';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const modal = (props) => {
    return (
        <Auxillary>
            <Backdrop isShow={props.isShow} closeModal={props.closeModal}></Backdrop>
            <div className="Modal" 
                // style={{ transform: props.isShow ? 'translateY(0)' : 'translateY(-1)' }}
                style={{ display: props.isShow ? 'block' : 'none', opacity: props.isShow ? "1" : "0" }}
            >
                {props.children}
            </div>
        </Auxillary>
    );
}

export default modal;