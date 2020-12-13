import React from 'react';
import './sign-up.styles.scss';
import FormInput  from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {signUpStart} from '../../redux/user/user.actions';
import { connect } from 'react-redux';
//import {auth,createUserProfileDocument} from './../firebase/firebase.utils';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit=async (event)=>{
        event.preventDefault();
        const {signUpStart}=this.props;

        const {displayName,email,password,confirmPassword}=this.state;
        if(password!== confirmPassword){
            alert("password don't match");
            return;
        }
        signUpStart({email,password,displayName});
       /*  try{

            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            ////storing user data in firestore database from firebase platform[authentication portion]
            await createUserProfileDocument(user,{displayName})
//after submission input elements should be reset
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });

        }catch(error){
           console.log(error);
        } */
       
    }

    handleChange=(event)=>{
        event.preventDefault();
        const name=event.target.name
        const value=event.target.value
       
         this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        //const displayName=this.state.displayName;
        return(
            <div className="sign-up">
              <h2>I do not have an account</h2>
              <span>Sign up with your Email and Password</span>
              <form className="sign-up-form" onSubmit={this.handleSubmit}>
                
                    <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={this.handleChange} 
                    label="displayName" required/>

                    <FormInput 
                    type="email" 
                    name="email"
                    value={email} 
                    handleChange={this.handleChange} 
                    label="email" required/>  

                    <FormInput  
                    type="password"
                    name="password"
                    value={password}
                    handleChange={this.handleChange} 
                    label="password" required/>

                    <FormInput
                    type="chandlefirmPassword" 
                    name="confirmPassword"
                    value={confirmPassword} 
                    handleChange={this.handleChange} 
                    label="confirmPassword" required/>
                        
                    <CustomButton type="submit">SIGN UP</CustomButton>
              </form>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    signUpStart:({email,password,displayName})=>dispatch(signUpStart({email,password,displayName}))
})
export default connect(null,mapDispatchToProps)(SignUp);