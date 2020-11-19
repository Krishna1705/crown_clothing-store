import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from './../../asset/crown.svg';
import { auth } from '../firebase/firebase.utils';
import {connect} from 'react-redux';

//use of reselect
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

const Header=({currentUser,hidden})=>{
return(
    <div className="header">
       <Link className="logo-container" to='/'>
           <Logo className="logo"/>
       </Link>
       <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/contact'>
                CONTACT 
            </Link>
            {
                currentUser?
               ( <div className="option" onClick={()=>auth.signOut()}>
                 
                 SIGNOUT
                </div>)   :
               ( <Link className="option" to='/signin'>
                SIGNIN
                </Link> )
            }
            <CartIcon/>
            
       </div>
       {
           hidden ? null : <CartDropdown/>
       }
      
    </div>
)
}
//mapStateToProps-it subscribes to the store,so when there is any update in store this compnent will get an update
//mapstateToProps function fetch values from the store-this function catch the action values 
//const mapStateToProps=state=>({//this function has argument state and it returns an object
//    currentUser:state.user.currentUser//here user- is from user.action.js,currentUser-is from user.reducer.jsx
//})

//this function returns valus from the rootreducer 
/* const mapStateToProps=({user:{currentUser},cart:{hidden}})=>
                                                                ({
                                                                        currentUser,
                                                                        hidden
                                                                    })
 */
//we can write above function s follows without using object destructuring
//it returns values from the root reducer.(STATE OBJECT VALUE IS FROM ROOT REDUCER)
//it takes state as an argument and returns an object
/* const mapStateToProps=state=>({
                                hidden:  state.cart.hidden,
                                currentUser: state.user.currentUser
                               })
 */
//use of reselect in mapStateToProps
/* const mapStateToProps=state=>({
    currentUser:selectCurrentUser(state),
    hidden:selectCartHidden(state)
})
 */
//use of createStructuredSelector from reselect
//we can also write above function as follows🧮 

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps,null)(Header);