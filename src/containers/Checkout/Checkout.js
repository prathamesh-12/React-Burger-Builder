import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Auxillary from '../../hoc/auxillary';
import ContactInfo from '../Contact-Info/Contact-Info';
import {Route} from 'react-router-dom';
 

class Checkout extends Component {

    state = {
        ingredients : {
            meat: 1,
            cheese: 1,
            salad: 1,
            bacon: 1
        }
    }

    componentWillMount() {
        const ingredients = {};
        let params = new URLSearchParams(this.props.location.search);
        let price = 0;
        for (let p of params) {
            if(p === "price") {
                debugger;
            }
            ingredients[p[0]] = +p[1];
        }
        this.setState({ingredients: ingredients});
    }
    
    onCancelCheckoutSummary = () => {
        this.props.history.goBack();
    }

    onContiueCheckoutSummary = () => {
        this.props.history.replace("/checkout/contact-info");
    }
    
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients} 
                    onCancelCheckoutSummary={this.onCancelCheckoutSummary}
                    onContiueCheckoutSummary={this.onContiueCheckoutSummary}
                />
                <Route path={this.props.match.path+"/contact-info"} 
                       render={() => (<ContactInfo ingredients={this.state.ingredients}/>)}
                       ></Route>
            </div>
        );
    }
}

export default Checkout;