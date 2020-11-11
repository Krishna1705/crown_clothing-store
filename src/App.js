import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch,Route} from  'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/singn-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './components/firebase/firebase.utils';

import {connect} from 'react-redux';
import{setCurrentUser} from './redux/user/user.actions';

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
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
                                         //this.setState({currentUser:user});
                                         // console.log(user);
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
        <Route  path='/signin' component={SignInAndSignUpPage}/>
        
      </Switch>
      </div>
    );
  }
  
}

//mapDispatchToProps-this function actually will update app componenr based on use action
const mapDispatchToProps=dispatch=>({
     setCurrentUser:user=>dispatch(setCurrentUser(user))//setCurrentUser(user)-this is action file' function
})
export default connect(null,mapDispatchToProps)(App);
