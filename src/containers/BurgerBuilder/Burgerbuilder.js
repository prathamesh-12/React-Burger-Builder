import React, { Component } from "react";

import Auxillary from '../../hoc/auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        isDisplayOrderSummary: false
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

    render() {
        const disabledIngredients = {...this.state.ingredients};
        for (let iKey in disabledIngredients) {
            disabledIngredients[iKey] = (disabledIngredients[iKey] < 1);
        }
        return (
            <Auxillary>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredientsHandler}
                    removeIngredient={this.removeIngredientsHandler}
                    disabled={disabledIngredients}
                    price={this.state.price}
                    isDisabledOrderNow={this.state.isDisabledOrderNow}
                    isDisplayOrderSummary={this.state.isDisplayOrderSummary}
                    />
            </Auxillary>
        );
    }
}

export default BurgerBuilder;