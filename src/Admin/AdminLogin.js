import loginmodule from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/index';

import { useState } from 'react';
import NavBar from '../navBar';
const AdminLogin = () => {

     const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useNavigate();
    let x = 2;

    const clicked = () => {
        // signInWithEmailAndPassword(auth, email, password).then(() => {
        //     history('/AddRoom');
        // }).catch((error) => {
        //     alert("Username or password doesn't exist!")

        // })
        if(email==="preciousthobile99@gmail.com" ){
            history('/AddRoom');
        }else{
            alert('Sorry Only Admins can login here')
        }

    }
    const forgotPasswordHandle = () => {

        if (email)
            sendPasswordResetEmail(auth, email).then(() => (email));
    } 
    return (
        <body >
            <NavBar/>
            <div className={loginmodule.body}>
                <div className={loginmodule.right}>
                    <h4 className={loginmodule.h4}>Welcome To Place To Be</h4>

                    <div className={loginmodule.n}>
                        Username<br />
                        <input type="text" name="name" className={loginmodule.name} id="name" required onChange={(event) => {
                            setEmail(event.target.value)
                        }} /> <br /><br />

                        Password<br />
                        <input type="password" name="pass" className={loginmodule.pass} id="pass" required onChange={(event) => {
                            setPassword(event.target.value)
                        }} /><br />
                    </div>
                    <footer><button onClick={forgotPasswordHandle} >forgotPassword</button> </footer><br /><br />
                    <button type="submit" name="button" className={loginmodule.button} onClick={clicked}>Login</button><br></br>
                    

                </div>
            </div>

            <div className={loginmodule.lastPasrt}>
                <div className={loginmodule.contact}>
                    <h1>Contact Us</h1>
                    <ul>
                        <li>About To Do</li>
                        <li>315 Grand Ave,Coconut Grove,merrick way,FL 1234444</li>
                        <li>hello@hotelname.com</li>
                        <li>076 123 2522</li>
                        <li>011 586 1200</li>
                    </ul>
                </div>
                <div className={loginmodule.ForCustomer}>
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
    );
}
export default AdminLogin;