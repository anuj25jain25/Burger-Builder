import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './burgerIngredients/burgerIngredients';

const burger = (props)  => {
    return(
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;