import React, { Component } from 'react';
import Aux from '../../../higher order component/MyAux/MyAux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    
    //this could be a functional component

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey =>{
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}</li>
        }) 

        return(
                <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}$</strong></p>
                <p>Continue to Checkout?</p>
                <Button 
                    clicked = {this.props.orderClosed}
                    btnType = {'Danger'}
                        >CANCEL</Button>
                <Button
                    clicked = {this.props.orderContinue}
                    btnType="Success"
                        >CONTINUE</Button>
            </Aux>
        );
    }
} 

export default OrderSummary;