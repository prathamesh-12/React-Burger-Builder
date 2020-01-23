import React from 'react';
import Auxillary from '../../../hoc/auxillary';
import './OrderSummary.css';

const OrderSummary = (props) => {
    const ingredients = props.ingredients;

    const ingredients_LI = Object.keys(ingredients)
                            .map((igKey, idx) => {
                                return (<li className="list-item-ingredient" key={igKey+idx}>{igKey} - {ingredients[igKey]}</li>);
                            });

    return (
        <Auxillary>
            <h3>Order Summary</h3>
            <p>You have ordered following items</p>
            <ul>
                {ingredients_LI}
            </ul>
        </Auxillary>
    );
}

export default OrderSummary;