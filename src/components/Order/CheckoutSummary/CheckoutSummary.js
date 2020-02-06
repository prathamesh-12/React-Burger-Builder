import React from 'react';
import './CheckoutSummary.css'
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
   
    return (
        <div className="CheckoutSummaryWrapper">
            <h2>Your Burger Is Ready</h2>
            <div className="CheckoutSummaryBurgerWrapper">
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className="CheckoutSummaryButtonsWrapper">
                <Button btnType="Danger" onButtonClicked={props.onCancelCheckoutSummary}>CANCEL</Button>
                <Button btnType="Success" onButtonClicked={props.onContiueCheckoutSummary}>CONTINUE</Button>
            </div>
        </div>
    )

}

export default checkoutSummary;