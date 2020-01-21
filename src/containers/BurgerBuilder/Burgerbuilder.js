import React, { Component } from "react";

import Auxillary from '../../hoc/auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 2,
            salad: 3,
            bacon: 1
        }
    };
    render() {
        return (
            <Auxillary>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;