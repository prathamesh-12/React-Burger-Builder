import React from 'react';

import Auxillary from '../../hoc/auxillary';

const layout = (props) => { 
    return (
        <Auxillary>
            <div>toolbar, sidebar and Backdrop</div>
            <main>
                {props.children}
            </main>
        </Auxillary>
    )
}

export default layout;