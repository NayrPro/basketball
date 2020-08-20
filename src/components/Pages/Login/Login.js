import React from 'react'
import "./login.css"
import Navbar from '../../Navbar/Navbar'
import FormikComponent from './Formik/FormikComponent'
export default function Login() {
    return (
        <div className="login-banner">
            <Navbar/>
            <div className="login-banner overlay">
                <div className="login-form">
                    <h2>Sign in to our website</h2>
                    {/* 
                    <form>
                        <div className="form-control">
                            <label for="username">Username or mail adress</label>
                            <input type="text" name="username" id="username"/>
                        </div>
                
                        <div className="form-control">
                            <label for="password">Password</label>
                            <input type="text" name="password" id="password"/>
                        </div>
                        <button className="main-form-input submit" type="submit">Login</button>
                    </form> */}
                    <FormikComponent/>
                </div>
	        </div>
        </div>
    )
}
