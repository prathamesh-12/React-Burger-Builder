import React, { Component } from "react";

import Auxillary from '../../hoc/auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios_orders from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import errorHandler from "../../hoc/Error-Handling/ErrorHandler";
import {Redirect} from 'react-router-dom';


const BASE_INGREDIENTS_PRICE = {
        meat: 0.7,
        cheese: 1.2,
        salad: 1,
        bacon: 0.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        price: 5,
        isDisabledOrderNow: false,
        isDisplayOrderSummary: false,
        isDisplaySpinner: false,
        isIngredientSaved: false
    };

    addIngredientsHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const updatedCount = oldIngredientCount + 1;

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const existingPrice = this.state.price;

        const updatedPrice = Number(existingPrice) + Number(BASE_INGREDIENTS_PRICE[type]);

        this.setState({ingredients: updatedIngredients, price: updatedPrice});
        this.updatePurchaseHandler(updatedIngredients);
    }

    removeIngredientsHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const updatedCount = oldIngredientCount - 1;

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const existingPrice = this.state.price;
        const updatedPrice = Number(existingPrice) - Number(BASE_INGREDIENTS_PRICE[type]);

        this.setState({ingredients: updatedIngredients, price: updatedPrice});
        this.updatePurchaseHandler(updatedIngredients);
    }

    updatePurchaseHandler = (ingredients) => {
        const sumIngredients = Object.keys(ingredients)
                            .map(igKey => {
                                return ingredients[igKey]
                            })
                            .reduce((sum, ele) => {
                                return sum + ele;
                            }, 0);

        this.setState({ isDisabledOrderNow: sumIngredients > 0 });
    }

    onOrderNowClickHandler = () => {
        this.setState({isDisplayOrderSummary: true});
    }

    closeModal = () => {
        this.setState({isDisplayOrderSummary: false});
    }

    onContinueClicked = () => {
        // this.setState({isDisplaySpinner: true});
        // const orderData = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: 'Prats Nims',
        //         email: 'prats@gmail.com',
        //         phone: '4085122139',
        //         address: {
        //             addressLine1: '50 Oak Blf',
        //             state: 'CT',
        //             country: 'US',
        //             zip: '06001'
        //         }
        //     },
        //     deliveryMethod: 'Fast'
        // };

        // axios_orders.post("/orders.json", orderData)
        //     .then(respData => {
        //         this.setState({isDisplaySpinner: false, isDisplayOrderSummary: false, isIngredientSaved: true});
        //         this.props.history.push("/checkout");
        //     })
        //     .catch(errData => {
        //         console.log(errData);
        //         this.setState({isDisplaySpinner: false, isDisplayOrderSummary: false});
        //     });
            const queryParams = [];

            for (let iIngredientKey in this.state.ingredients) {
                queryParams.push(encodeURIComponent(iIngredientKey)+"="+encodeURIComponent(this.state.ingredients[iIngredientKey]));
            }
            this.props.history.push({
                pathname: "/checkout",
                search: '?'+queryParams.join('&')
            });
    }

    render() {
        const disabledIngredients = {...this.state.ingredients};
        for (let iKey in disabledIngredients) {
            disabledIngredients[iKey] = (disabledIngredients[iKey] < 1);
        }
        
        let orderSummary = <OrderSummary 
                                ingredients={this.state.ingredients}
                                price={this.state.price}
                                onContinueClicked={this.onContinueClicked}
                                onPurchaseCancelled={this.closeModal}
                                ></OrderSummary>
        
        if(this.state.isDisplaySpinner) {
            orderSummary = <Spinner />
        }

        return (
            <Auxillary>
                <Modal 
                    isShow={this.state.isDisplayOrderSummary}
                    closeModal={this.closeModal}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                    addIngredient={this.addIngredientsHandler}
                    removeIngredient={this.removeIngredientsHandler}
                    disabled={disabledIngredients}
                    price={this.state.price}
                    isDisabledOrderNow={this.state.isDisabledOrderNow}
                    isDisplayOrderSummary={this.state.isDisplayOrderSummary}
                    onOrderNowClickHandler={this.onOrderNowClickHandler}
                ></BuildControls> 
            </Auxillary>
        );
    }
}

export default errorHandler(BurgerBuilder, axios_orders);