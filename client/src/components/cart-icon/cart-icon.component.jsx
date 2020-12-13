import React from 'react';
import {ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';


//use of reselect
import {createStructuredSelector} from 'reselect';
import { selectCartItemsCount} from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
 </div>
)
  
const mapDispatchToProps=(dispatch)=>{
    return {
            toggleCartHidden:()=>dispatch(toggleCartHidden())
           }
}

//reduce() function is selector,

//if there is not any change inside itemcount,and chnage in currentUser then also 
//mapStateToProps() [which contain itemCount]will get called everytime,so it can reduce performance,
//in such situation we will use memoization(caching),and we will use reselect library for caching
//yarn add reselect
/* 
const mapStateToProps=state=>({
    itemCount:state.cart.cartItems.reduce((accumulator,cartItem)=>accumulator+cartItem.quantity,0)
 }) */

 //use of reselect as folows:we will create cart.selectors.js file and use it as follows: 
/*  const mapStateToProps=state=>{
     console.log("itemcount is called");
     return{
        itemCount:selectCartItemsCount(state)
     }
    
 } */
//use of createStructuredSelector from reselect

const mapStateToProps=createStructuredSelector({
                            itemCount:selectCartItemsCount
                        })
  
  

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);