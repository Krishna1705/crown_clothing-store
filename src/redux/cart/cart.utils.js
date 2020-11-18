//utility function -allows us to keep our files clean and organize functions that we my need in multiple files in
//one location.

//here for cart we make utility c=function,if we add same item for multiple times then it will
//create new object with update quantity every time,bcoz if we make change in property of object then 
//react will not re render component,but if we make changes in object then it will re render component.

const addItemToCart=(cartItems,cartItemToAdd)=>{
    //find() will return boolean value
   const existingCartItem= cartItems.find(cartItem=>
                                                cartItem.id===cartItemToAdd.id
                                          )
   if(existingCartItem){
       //map will return a new array,so component will be re rendered
          return cartItems.map(cartItem=>
                                  cartItem.id===cartItemToAdd.id
                                  ?
                                  {...cartItem,quantity:cartItem.quantity+1}
                                  :
                                  cartItem

                              )
   }else{
       //if item is added for the first time then its quantity is set to 1
       return  [...cartItems,{...cartItemToAdd,quantity:1}];
   }
}

export default addItemToCart;