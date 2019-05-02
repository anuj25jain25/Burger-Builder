import React, {Component} from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/burger/burger';

class BurgerBuilder extends Component {
    render(){
        return (
            <Aux>
                <Burger />
                <div>Builder Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;