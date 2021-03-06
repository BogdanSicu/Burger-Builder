import React, {Component} from "react";

import Aux from '../../higher order component/MyAux/MyAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Model/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{

    state ={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: true,
        purchasing: false
    }



    updatePurchaseStare (ingredients){

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            }).reduce((sum, el) =>{
                return sum + el;
            }, 0);

        this.setState({purchaseable: sum === 0});
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseStare(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];

        if(oldCount > 0){
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
    
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAddition;
    
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
            this.updatePurchaseStare(updatedIngredients);
        }
    }

    purchaseHandler = () => {
        const newPurchasing = this.state.purchasing;
        if(newPurchasing === true){
            this.setState({purchasing: false});  
        } else{
        this.setState({purchasing: true});  
        }
    }

    purchaseContinueHandler = () =>{
        alert('You continue');
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return( 
            <Aux>
                <Modal show={this.state.purchasing} modalClosed = {this.purchaseHandler}>
                    <OrderSummary 
                        ingredients = {this.state.ingredients}
                        price = {this.state.totalPrice}
                        orderClosed = {this.purchaseHandler}
                        orderContinue = {this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler} 
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchaseable = {this.state.purchaseable}
                    price = {this.state.totalPrice}
                    purchasing = {this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;