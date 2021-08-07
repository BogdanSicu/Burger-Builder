import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{

    let listIngredients = Object.keys(props.ingredients)
        .map(igKey =>{
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key = {igKey+i} type = {igKey}/>
                });
        })
        .reduce((previousValue, currentValue) =>{
            return previousValue.concat(currentValue);
        }, []);

        if(listIngredients.length === 0){
            listIngredients = <p>Please start adding ingredients</p>
        }

    // console.log(listIngredients);

    return(
        <div className={` ${classes} Burger`}> 
            <BurgerIngredient type="bread-top"/>
            {listIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;