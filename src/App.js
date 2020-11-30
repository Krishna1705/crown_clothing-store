import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch,Route,Redirect} from  'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/singn-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkoutpage.component';

import {auth,createUserProfileDocument} from './components/firebase/firebase.utils';


import {connect} from 'react-redux';
import{setCurrentUser} from './redux/user/user.actions';
//use of reselect
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';

 //add shop data to firestore dynamically
import {selectShopCollectionsForPreview} from './redux/shop/shop.selectors';
//import {addCollectionAndDocuments} from './components/firebase/firebase.utils'; 
import AdminPage from './pages/admin/adminpage.component';

class App extends React.Component {
  //we can remove follow constructor code after writing mapDispatchToProps() function.
  /* constructor(){
    super();
    this.state={
      currentUser:null
    }
  } */

  
 
  unsubscribeFromAuth=null;
  
  componentDidMount(){


   const {setCurrentUser}=this.props;
   /* //add shop data dynamically as follows: 
   const {setCurrentUser,collectionsArray}=this.props;*/
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
                                         //this.setState({currentUser:user});
                                         // console.log(user);
 //till now,we have stored data in firestore,but follow code will fetch user data in our app from database
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot=>{
               /*     //  console.log(snapShot);
                  this.setState({
                            currentUser:{
                                    id:snapShot.id,
                                    ...snapShot.data()
                            }
                          },()=>console.log(this.state)) */

                          setCurrentUser({
                            id:snapShot.id,
                            ...snapShot.data()
                          })
                      });
                  
            }else{
            //this.setState({currentUser:userAuth});
            setCurrentUser(userAuth);
            }
         //add shop_data into firestore manually
         //addCollectionAndDocuments('collections',collectionsArray);
         //here we dnt want to pass all shop data,bcoz firestore will automatically generate id and routerName from its own so we only pass title and items to the firestore
        /*     addCollectionAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items}))
                                    )   */
      });
    }

  componentWillUnmount(){
       this.unsubscribeFromAuth();
  }
                        
  render(){
    return (
      <div>
      <Header/>
      <Switch>
     
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/checkout' component={CheckoutPage}/>
        <Route  exact path='/signin' 
        render={()=>this.props.currentUser?
                    (
                      <Redirect to='/' />
                    ) : 
                    (
                      <SignInAndSignUpPage/>
                    )
               }
        />
         <Route exact path='/admin' component={AdminPage}/>
        
      </Switch>
      </div>
    );
  }
  
}

/* const mapStateToProps=({user})=>({//user is key of rootreducer
  currentUser:user.currentUser
})
 */
//use of reselect
/* const mapStateToProps=state=>({
  currentUser:selectCurrentUser(state)
}) */
//use of createStructuredSelector from reselect
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  //add shop_data into firestore manually
  collectionsArray:selectShopCollectionsForPreview
})
//mapDispatchToProps-this function actually will update app component based on use action
//means this function dispatch an action
const mapDispatchToProps=dispatch=>({
     setCurrentUser:user=>dispatch(setCurrentUser(user))//setCurrentUser(user)-this is action file' function
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
