import React from 'react';
import classes from './NavigationItems.css';
import NavivationItem from './NavigationItem/NavigationItem';

const navigationItems = () =>(
    <ul className = {`${classes} NavigationItems`}>
        <NavivationItem
            link="/"
            active>
                Burger Builder</NavivationItem>
        <NavivationItem
            link="/">
                Checkout</NavivationItem>
    </ul>
);

export default navigationItems;