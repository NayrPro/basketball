import React from 'react'
import "./login.css"
import Navbar from '../../Navbar/Navbar'

export default function Login() {
    return (
        <div class="login-banner">
            <Navbar/>
            <div class="login-banner overlay">
                <div class="login-form">
                    <h2>Sign in to our website</h2>
                    <form>
                        <div class="form-control">
                            <label for="username">Username or mail adress</label>
                            <input type="text" name="username" id="username"/>
                        </div>
                
                        <div class="form-control">
                            <label for="password">Password</label>
                            <input type="text" name="password" id="password"/>
                        </div>
                        <button class="main-form-input submit" type="submit">Login</button>
                    </form>
                </div>
	        </div>
        </div>
    )
}
