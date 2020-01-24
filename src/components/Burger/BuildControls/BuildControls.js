import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salads', type: 'salad', key: '11' },
    { label: 'Meats', type: 'meat', key: '12' },
    { label: 'Cheese', type: 'cheese', key: '13' },
    { label: 'Bacons', type: 'bacon', key: '14' }
];
const buildControls = (props) => (
        <div className="BuildControls">
            <p>Current Price: <span className="BurgerPrice">${props.price.toFixed(2)}</span></p>
            {controls.map(control => (
                <BuildControl 
                    key={control.key} 
                    label={control.label} 
                    type={control.type}
                    addIngredient= {() => props.addIngredient(control.type)}
                    removeIngredient= {() => props.removeIngredient(control.type)}
                    disabled= {props.disabled[control.type]}
                    >
                    </BuildControl>
            ))}
            <button 
                className="OrderButton" 
                disabled={!props.isDisabledOrderNow}
                onClick={props.onOrderNowClickHandler}
                >
                    Order Now
            </button>
        </div>);


export default buildControls;