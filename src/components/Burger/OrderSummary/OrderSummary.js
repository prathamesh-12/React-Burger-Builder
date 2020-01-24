import React from 'react';
import Auxillary from '../../../hoc/auxillary';
import './OrderSummary.css';
import Button from '../../UI/Button/Button';

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
            <p>Total Price: <span className="Price-label">${props.price.toFixed(2)}</span></p>
            <p>Continue To Checkout?</p>
            <Button btnType="Danger" onButtonClicked={props.onPurchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" onButtonClicked={props.onContinueClicked}>CONTINUE</Button>
        </Auxillary>
    );
}

export default OrderSummary;