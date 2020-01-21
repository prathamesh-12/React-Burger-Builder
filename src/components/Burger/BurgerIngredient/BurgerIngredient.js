import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredient.css';

class BurgerIngredient extends Component {

    render () {

        let ingredeient = null;
    
        switch(this.props.type) {
            case 'bread-bottom' :
                ingredeient = ( <div className="BreadBottom"></div> );
                break;
            
            case 'bread-top' : 
                ingredeient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            
            case 'meat' : 
                ingredeient = ( <div className="Meat"></div> );
                break;
            
            case 'cheese' : 
                ingredeient = ( <div className="Cheese"></div> );
                break;
    
            case 'salad' : 
                ingredeient = ( <div className="Salad"></div> );
                break;
    
            case 'bacon' : 
                ingredeient = ( <div className="Bacon"></div> );
                break;
    
            default: ingredeient = null;
            
                
        }
    
        return ingredeient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};


export default BurgerIngredient;