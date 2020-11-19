import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems} from '../../redux/cart/cart.selectors';

const CartDropdown=({cartItems})=>{
    return (
            <div className="cart-dropdown">
                <div className="cart-items">
                    {
                        cartItems.map(cartItem=>
                                               <CartItem  key ={cartItem.id} item={cartItem}/>)
                    }
                    
                </div>
                
                <CustomButton> GO TO CHECKOUT</CustomButton>
            </div>
    )
}
/* const mapStateToProps=({cart:{cartItems}})=>({
       cartItems
}) */

/* const mapStateToProps=state=>({
    cartItems:state.cart.cartItems
}) */
//we also can use memoize selector as follows: 
const mapStateToProps=state=>({
    cartItems:selectCartItems(state)
}) 

export default connect(mapStateToProps,null)(CartDropdown);