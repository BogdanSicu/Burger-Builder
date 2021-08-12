import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../higher order component/MyAux/MyAux';

const sideDrawer = (props) => {

    let attachedOpenCloseClass = 'Close';
    if(props.open){
        attachedOpenCloseClass = 'Open';
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked = {props.clickedSideDrawer}/>
            <div className = {`${classes} SideDrawer ${classes} ${attachedOpenCloseClass}`}>
                <Logo height = "11%"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;