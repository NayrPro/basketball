import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

const Input = (props) => {
    
    const { label, name, error, touched, ...rest } = props
    const stylingError = (error, touched) =>{
        if((error && touched)){
                return error && {boxShadow: "red 0px 0px 2px",
                border: "1px solid red"} 
            }
        }
    return (
        <div className="form-control">
            <label htmlFor={name}>{label} :</label>
            <Field 
                id={name} 
                name={name}
                style={stylingError(error, touched)}
                {...rest} 
                />
            <ErrorMessage name={name} component={TextError}/>
        </div>
        
        )
    }
/* This component will render only if it's current props
are different than the previous ones */
export default React.memo(Input)
    
    