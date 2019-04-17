import React from 'react';
import Aux from '../../hoc/aux';

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, sidebar, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;