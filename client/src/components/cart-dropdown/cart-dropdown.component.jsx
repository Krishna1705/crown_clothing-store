import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

//use of reselect
import {createStructuredSelector} from 'reselect';
import { selectCartItems} from '../../redux/cart/cart.selectors';
//import withrouter to make ue of history
import {withRouter} from 'react-router-dom';


const CartDropdown=({cartItems,history,dispatch})=>{
    return (
            <div className="cart-dropdown">
                <div className="cart-items">
                    {
                        cartItems.length? 
                                          cartItems.map(cartItem=>
                                          <CartItem  key ={cartItem.id} item={cartItem}/>)
                                        : 
                          (<span className="empty-message">Cart is Empty</span>)
                    }
                    
                </div>
                
                <CustomButton onClick={()=>{
                                                history.push('/checkout');
                                               // toggleCartHidden();
                                               dispatch(toggleCartHidden());
                                               }
                                            }> 
                            GO TO CHECKOUT</CustomButton>
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
/* const mapStateToProps=state=>{
    console.log("cart-dropdown is called")
    return{
        cartItems:selectCartItems(state)
    }
    
}
 */
//use of createStructuredSelector from reselect

const mapStateToProps= createStructuredSelector({
        cartItems:selectCartItems
})

/* instead of follow code u can use short way to use mapDispatchToProps,for this dont pass null inside
connect for mapDispatchToProps,and u will get dispatch as props inside component

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
}) */
export default withRouter(connect(mapStateToProps)(CartDropdown));