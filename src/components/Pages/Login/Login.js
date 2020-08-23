import React from 'react'
import "./login.css"
import Navbar from '../../Navbar/Navbar'
import * as Yup from 'yup'
import FormikComponent from "../../Formik/FormikComponent"

export default function Login() {

    /** Props that will be passed on FormikComponent in order to show a form 
        with specific properties*/
    const InitialValues = {
        username: '',
        password: '',
    }
    
    const validationSchema = Yup.object({
        username: Yup.string().required("Username or email required"),
        password: Yup.string().required("Enter a password")
    })

    const onSubmit = values =>{
         console.log('Form data', values)
    }

    return (
        <div className="login-banner">
            <Navbar/>
            <div className="login-banner overlay">
                <div className="login-form">
                    <h2>Sign in to our website</h2>
                    <FormikComponent InitialValues={InitialValues} 
                                     validationSchema={validationSchema} 
                                     onSubmit={onSubmit}
                    />
                </div>
	        </div>
        </div>
    )
}
