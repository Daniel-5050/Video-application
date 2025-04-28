import React, { Component } from 'react';
import Joi from  'joi-browser';
import Input from './common/input';
import Form from './common/form';

class LoginForm extends  Form {
    state ={
        data: {
            username:" ",
            password:'',
        },

        errors:{} 
    };


    // ---------------------------joi for valiation


    schema ={
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')

    }

  

   
     

 

    doSubmit=()=>{
        // call to server----------
        console.log(" Form Submit");
    
 }

 render() { 

    
     return (
        <div> 
         <h3>Login</h3>
         <form  onSubmit={this.handleSumit} >
            {this.renderInput('username',"Username")},
            {this.renderInput('password',"Password", 'password')}

         
            
           {/* <Input
             name="password" 
             value={data.password}
             label= "Password" 
             error={errors.password}
             onChange={this.handleChange}/> */}
            
            {this.renderButton('Login')}
            
            
         </form>
        
        
        
        
        </div>
     );
 }









    
}
 
export default  LoginForm;