import { rest } from 'lodash';
import React from 'react';

const Input = ({name,label,error, ...rest}) => {
    return ( 
    <div  className='form-group'><label htmlFor={name}>{label}</label>
    <input 
    // value={value}
    // type={type}
    // onChange={onChange}
    {...rest}
    id={name} 
    name={name}
     className='form-control' />

     { error && <div className='alert alert-danger'>{error}</div>}
    </div>  );
}
 
export default Input;