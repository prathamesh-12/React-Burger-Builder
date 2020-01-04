import React from 'react';

import Auxillary from '../../hoc/auxillary';
import './Layout.css';

const layout = (props) => { 
    return (
        <Auxillary>
            <div>toolbar, sidebar and Backdrop</div>
            <main className="content">
                {props.children}
            </main>
        </Auxillary>
    );
}

export default layout;