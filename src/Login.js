import React, { useState } from 'react';
import {Link , useHistory} from "react-router-dom";
import {auth} from "./firebase.js";
import "./Login.css";
function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const SignIn=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push("/");
            }
        }).catch(error=>alert(error.message))
    }
    const Register =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push("/");
            }
        }).catch(error=>alert(error.message))
    }
    return (
        <div className="Login">
            <Link>
                <img className="Login__logo" src="Amazon logo.png"/>
            </Link>
            <div className="Login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button type="submit" className="Login__signInButton" onClick={SignIn} >Sign In</button>
                    
                    <p>
                        by signing-inyou agree to AMAZON FAKE CLONE conditions
                    </p>
                    <button className="Login__registerButton" onClick={Register}>create your Amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
