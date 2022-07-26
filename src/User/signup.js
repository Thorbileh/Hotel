import signinmodule from './register.module.css';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../navBar';
import { logout, signUp, useAuth } from '../firebase/index';
import Profile from './profile';
import LogOut from './logOut';

function Signup() {
    //use ref to get direct change
    const emailRef = useRef();
    const passwordRef = useRef();

    //to get the current user logged into your website
    const currentUser = useAuth();

    //for the program not to take time when it loads information to firebase
    const [loading, setLoading] = useState(false);

    //use navigate to move through pages
    let navigate = useNavigate();

    //for signup button to register the user to firebase
    async function handleSignup() {
        setLoading(true);
        try {

            await signUp(emailRef.current.value, passwordRef.current.value);
            navigate.push("/Rooms")

        } catch {
            alert("email already exists");
        }
        setLoading(false);
    }

    //to logout the useer from website
    async function handleLogout() {
        setLoading(true);
        try {
            logout()
        } catch {
            alert("Couldn't logout");
        }
        setLoading(false);
    }


    return (

        <body>
            <NavBar />
            
            <div className={signinmodule.body}>
            <LogOut/> 
                <div className={signinmodule.right}>
                    <h4 className={signinmodule.h4}>Welcome To Place To Be</h4>
                    {!currentUser && <div className={signinmodule.n}>
                    <span className='One'>Enter Your Email</span><br />
                    <input type="text" name="name" className={signinmodule.name} id="name" required ref={emailRef} /> <br /><br />
                    Password<br />
                    <input type="password" name="pass" className={signinmodule.pass} id="pass" required ref={passwordRef} /><br />
                    <button onClick={handleSignup}>Sign up</button>
                </div>}
                </div>


               


               <LogOut/>
            </div>
            <div className={signinmodule.lastPasrt}>
                <div className={signinmodule.contact}>
                    <h1>Contact Us</h1>
                    <ul>
                        <li>About To Do</li>
                        <li>315 Grand Ave,Coconut Grove,merrick way,FL 1234444</li>
                        <li>hello@hotelname.com</li>
                        <li>076 123 2522</li>
                        <li>011 586 1200</li>
                    </ul>
                </div>
                <div className={signinmodule.ForCustomer}>
                    <h1>For Customer</h1>
                    <ul>
                        <li>About To Do</li>
                        <li>Customer care/help</li>
                        <li>Corporate Accounts</li>
                        <li>Fiancial Information</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
        </body>

    )
}

export default Signup;