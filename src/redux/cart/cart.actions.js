import {CartActionType} from './cart.types';
//actions are function that returns an acton object
/* export const toggleCartHidden=()=>({
     type:CartActionType.TOGGLE_CART_HIDDEN//here since its a tooogle action so we are not passing any payload
}) */

export const toggleCartHidden=()=>{
    return {
        type:CartActionType.TOGGLE_CART_HIDDEN
    }
}

export const addItem=(item)=>{
   return {
    type:CartActionType.ADD_ITEM,
    payload:item
   }
}