import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout, useAuth } from "./firebase";
import './nav.css'
import Profile from "./User/profile";
const NavBar = () => {

    const currentUser = useAuth()
    const [loading, setLoading] = useState(false);
    
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
       
        <div >
            <nav>
                <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/Signup">Register</Link>
                <Link to="/UserLogin">Login</Link>
                <Link to="/About">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/Services">Services</Link>
                <Link to="/BookingHistory">Booking History</Link>
                </div>
                
                {currentUser && <div className="profile">
                <div>{currentUser?.email}</div> <Profile />
                 {/* <button disabled={loading || !currentUser} onClick={handleLogout}>Log out</button> */}
             </div>}
           
                
            </nav>
        </div>
    );
}
export default NavBar;