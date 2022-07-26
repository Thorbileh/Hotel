import LoginMod from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth, useAuth } from '../firebase/index';
import { logout, login } from '../firebase/index';
import Profile from './profile';
import { useRef, useState } from 'react';
import NavBar from '../navBar';
import LogOut from './logOut';
const UserLogin = () => {

    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    let history = useNavigate();
    const currentUser = useAuth();

    async function handleLogin() {
        setLoading(true);
        try {

            await login(emailRef.current.value, passwordRef.current.value);
            history('/Rooms')

        } catch {
            alert("Login already exists");
        }
        setLoading(false);
    }
    async function handleLogout() {
        setLoading(true);
        try {
            logout()
        } catch {
            alert("Couldn't logout");
        }
        setLoading(false);
    }
    const forgotPasswordHandle = () => {

        if (emailRef)
            sendPasswordResetEmail(auth, emailRef).then(() => (emailRef));
    }
    return (
        <body >

            <NavBar />

            <div className={LoginMod.body}>
                <LogOut />
                <div className={LoginMod.right}>
                    <h4 className={LoginMod.h4}>Welcome To Place To Be</h4>

                    {/* <div>{currentUser?.email}</div> */}
                    {!currentUser && <div className={LoginMod.n}>
                        Username<br />
                        <input type="text" name="name" className={LoginMod.name} id="name" required ref={emailRef} /> <br /><br />
                        Password<br />
                        <input type="password" name="pass" className={LoginMod.pass} id="pass" required ref={passwordRef} /><br />
                        <footer><button onClick={forgotPasswordHandle} >forgotPassword</button> </footer><br /><br />
                        <button type="submit" name="button" className={LoginMod.button} onClick={handleLogin}>Login</button><br></br>
                        <Link to="/Signup" className={LoginMod.reg}>new to PLaceToBe?Register Now</Link>
                    </div>}


                </div>
            </div>

            <div className={LoginMod.lastPasrt}>
                <div className={LoginMod.contact}>
                    <h1>Contact Us</h1>
                    <ul>
                        <li>About To Do</li>
                        <li>315 Grand Ave,Coconut Grove,merrick way,FL 1234444</li>
                        <li>hello@hotelname.com</li>
                        <li>076 123 2522</li>
                        <li>011 586 1200</li>
                    </ul>
                </div>
                <div className={LoginMod.ForCustomer}>
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
export default UserLogin;