import loginmodule from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { useState } from 'react';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useNavigate();
    const clicked = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            history.push('/todoList');
        }).catch((error) => {
            alert("Username or password doesn't exist!")
            console.log(error)
        })

    }
    return (
        <body >
            <div className={loginmodule.body}>
                <nav className={loginmodule.nav}>
                    <Link to="/">Home</Link>
                    <Link to="/Hotels"></Link>
                    <Link to="/login">Login</Link>
                    <Link to="/Guest">guest</Link>

                </nav>
                <div className={loginmodule.right}>
                    <h4 className={loginmodule.h4}>Welcome to TakeMeFar</h4>

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
                    <footer>forgot Password?<Link to="/forgotPassword"></Link> </footer><br /><br />
                    <button type="submit" name="button" className={loginmodule.button} onClick={clicked}>Login</button><br></br>
                    <Link to="/register" className={loginmodule.reg}>new to LetsTravel?Create account</Link>

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
export default Login;