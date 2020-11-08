import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import {SignInWithGoogle} from '../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(event)=>{
              event.preventDefault();
              
              this.setState({email:'',password:''})
    }

    handleChange=(event)=>{
      //  const {value,name}=event.target;
         const name=event.target.name
         const value=event.target.value
        
          this.setState({[name]:value})
        
    }


    render(){
        return(
            <div className="sign-in">
               <h2 >I already have an account</h2>
               <span>sigin with your email and password.</span>
               
               <form onSubmit={this.handleSubmit}>
                   <FormInput type="email" name="email"
                   value={this.state.email} 
                   handleChange={this.handleChange} 
                   label="email"
                   />
                
                   <FormInput type="password" name="password"
                   value={this.state.password} 
                   handleChange={this.handleChange} 
                   label="password"
                   />
                  
                   
                  <div className="buttons">
                        <CustomButton type="submit">
                        sign in
                        </CustomButton>

                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
                        sign in with Google
                        </CustomButton>
                  </div>
               </form>
             
            </div>
        )
    }
}
export default SignIn;