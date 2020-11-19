//2 types of selectors are there.
/*input selector,output selector
input selector-it does not use createSelector
output selector-it does use inputSelector and createSelector */
import {createSelector} from  'reselect';

//input Selector-it will get whole state from root reducer as a patrameter and return state's 1st deep stage

const selectCart=state=>state.cart;

//output selector-it will use createSelector function.it contains 2 arguments
//1st argument-input selector-collection as array.
//2nd argument-function wghich returns desired value (here itemCount) out of the selector.
export const selectCartItems=createSelector(
                                            [selectCart],
                                            (cart)=>cart.cartItems
                                            )
 //now above selectCartItems becomes memoize selector

 export const selectCartItemsCount=createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((accumulator,cartItem)=>accumulator+cartItem.quantity,0)
 )

 export const selectCartHidden=createSelector([selectCart],(cart)=>cart.hidden)

 export const selectCartTotal=createSelector(
                                    [selectCartItems],
                                    (cartItems)=>cartItems.reduce(
                                                   (accumulator,cartItem)=>accumulator+cartItem.quantity*cartItem.price,
                                                   0))