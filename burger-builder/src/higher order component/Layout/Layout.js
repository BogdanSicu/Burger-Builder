import React, { Component } from 'react';
import Aux from '../MyAux/MyAux'
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () =>{
        if(this.state.showSideDrawer===true){
            this.setState({showSideDrawer:false});
        }else{
            this.setState({showSideDrawer:true});
        }
    }

    // drawerToggleClicked = () =>{
    //     this,this.setState({showSideDrawer: })
    // }

    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked = {this.sideDrawerHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    clickedSideDrawer={this.sideDrawerHandler}/>
                <main className={` ${classes} Content`}> 
                    {this.props.children}    
                </main>  
            </Aux>
        )
    }
}

export default Layout;