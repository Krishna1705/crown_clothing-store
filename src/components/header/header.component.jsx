import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from './../../asset/crown.svg';
import { auth } from '../firebase/firebase.utils';
import {connect} from 'react-redux';

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
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>
                                                                ({
                                                                        currentUser,
                                                                        hidden
                                                                    })

export default connect(mapStateToProps,null)(Header);