import React from 'react';
import './checkoutpage.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


import {connect} from 'react-redux';
import{createStructuredSelector} from 'reselect';
import  {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';


const CheckoutPage=({cartItems,total})=>{
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>

            {
             cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
            }

            <div className="total">Total : {total}$</div>
                   
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})


export default connect(mapStateToProps,null)(CheckoutPage);