import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css'

const burger = (props) => {
    let transformedIngredientsArray = 
    Object.keys(props.ingredients)
        .map((ingrdKey) => {
            return [...Array(props.ingredients[ingrdKey])].map((_ingrdnQuantity, _index) => {
                return <BurgerIngredient type={ingrdKey} key={ingrdKey+_index} />
            });    
        })
        .reduce((array, ele) => {
            return array.concat(ele);
        }, [])

        if(!transformedIngredientsArray.length) {
            transformedIngredientsArray = (<p>Add Ingredeients</p>)
        }

    return (
        <div className="burger">
            <BurgerIngredient type="bread-top"/>
                {transformedIngredientsArray}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;