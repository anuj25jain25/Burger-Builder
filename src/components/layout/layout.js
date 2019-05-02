import React from 'react';
import Aux from '../../hoc/aux';
import classes from './layout.css';

const layout = (props) => {
    return (
        <Aux>
            <div className={classes.layout}>Toolbar, sidebar, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;