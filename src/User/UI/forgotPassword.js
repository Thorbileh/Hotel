import regModule from './register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { useUserContext } from './context/userContext';

const forgotPassword = () => {
  
const {forgotPassword}=useUserContext();
  return (
    <body >
      <div className={regModule.body}>
        <nav className={regModule.nav}>
          <Link to="/">Home</Link>
          <Link to="/Rooms"></Link>
          <Link to="/login">Login</Link>
          <Link to="/About">About</Link>
          <Link to="/contack">Contact</Link>
          <Link to="/Services">Services</Link>

        </nav>
        <main className={regModule.main}>

          <Link to="/" class={regModule.x}>X</Link>
          <div className={regModule.signUp}>
            <h3 className={regModule.h3}>Register With PlaceToBe</h3>
          </div>
          <div className="line"> </div>

          <form className={regModule.register} method="post">
            Enter your email address<br></br>
            <input type="email" name="email" className={regModule.email} id="email" /> <br /><br />
            Create a Password:<br></br>
            <input type="password" name="Password" className={regModule.password} id="password"/><br /><br />
            Confirm Password:<br></br>
            <input type="password" name="Cpassword" className={regModule.Cpassword} id="Cpassword"
              /><br /><br />
          </form>
          <p className={regModule.p1}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
            You may receive SMS notifications from us and can opt out at any time.</p>
          <button type="button" className={regModule.buttons} name="button" >SignUp</button>
          <footer className={regModule.footer}><Link to="/Login">Already a member?Login</Link> </footer>

        </main>
      </div>

      <div className={regModule.lastPasrt}>
        <div className={regModule.contact}>
          <h1>Contact Us</h1>
          <ul>
            <li>About To Do</li>
            <li>315 Grand Ave,Coconut Grove,merrick way,FL 1234444</li>
            <li>hello@hotelname.com</li>
            <li>076 123 2522</li>
            <li>011 586 1200</li>
          </ul>
        </div>
        <div className={regModule.ForCustomer}>
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
export default forgotPassword;