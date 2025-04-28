import React, { Component } from 'react';
import Joi from  'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
    state = { 
        data: {
            username:" ",
            password:'',
            name:'',
        },

        errors:{} 
     };

     schema ={
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name')

    };

    doSubmit=()=>{
        // call to server----------
        console.log(" Form Submit");
    
 }
     
     
    render() { 
        return (
            <div> 
            <h3>Register</h3>
            <form  onSubmit={this.handleSumit} >
               {this.renderInput('username',"Username")},
               {this.renderInput('password',"Password", 'password')}
               {this.renderInput('name',"Name", 'name')}
               {this.renderButton("Register")}

   
            
               
              {/* <Input
                name="password" 
                value={data.password}
                label= "Password" 
                error={errors.password}
                onChange={this.handleChange}/> */}
               
              
               
               
            </form>
           
           
           
           
           </div>
        );
    }
}
 
export default RegisterForm;