import { Link, useNavigate, useLocation } from 'react-router-dom';
import hotelMod from './HotelInformation.module.css'
import hotel2 from '../images/House Lodge/white-house-lodge1.jpg'
import pic21 from '../images/House Lodge/white-house-lodge.jpg'
import pic22 from '../images/House Lodge/white-house-lodge (2).jpg'
import { useEffect, useState } from 'react';

const HotelInfomation = () => {
    const navigate = useNavigate()
        
    const {state}=useLocation()
    const {data} =state
    const [hotelss,setHotelss]=useState({})
    useEffect(()=>{
        setHotelss(data)
    })
    const viewMore = () => {
        
        navigate("/HouseLodgeRooms",{state:{data:hotelss}})
    }
    return (
        <body>
            <div className={hotelMod.hotelBackg}>
                <img src={hotelss.Image} alt='' width='1700' />
                <nav className={hotelMod.hotNav}>
                    <Link to="/">Home</Link>
                    <Link to="/Book">Book</Link>
                    <Link to="/Rooms" >Rooms</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/Activities">Activities</Link>
                    <Link to="Location">Location</Link>

                </nav>
                <div className={hotelMod.hotelName}>
                    <h1>{hotelss.HotelName}</h1>

                </div>
                <p className={hotelMod.p}>The secret of a happy life isn’t buried in a treasure chest…
                    It lies within your heart. It’s the little moments that make life big.
                    Don’t wait. Make memories today. Celebrate Life!</p>
            </div>
            <div>
                <div className={hotelMod.whiteSide}>
                    <div className={hotelMod.downText}>
                        <h1 className={hotelMod.h1}>Welcome to {hotelss.HotelName}</h1>
                        <p className={hotelMod.p2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <p className={hotelMod.p2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <button type="submit" onClick={ viewMore}>More</button>
                    </div>
                    <div className={hotelMod.gallary}>
                        <div className={hotelMod.pic1}><img src={pic21} /></div>
                        <div className={hotelMod.pic2} ><img src={pic22}></img></div>

                    </div>
                </div>
                <div className={hotelMod.lastPasrt}>
                    <div className={hotelMod.contact}>
                        <h1>Contact Us</h1>
                        <ul>
                            <li>About To Do</li>
                            <li>315 Grand Ave,Coconut Grove,merrick way,FL 1234444</li>
                            <li>hello@hotelname.com</li>
                            <li>076 123 2522</li>
                            <li>011 586 1200</li>
                        </ul>
                    </div>
                    <div className={hotelMod.ForCustomer}>
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
                <div className={hotelMod.maps} >
                    <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14422.686953401464!2d31.043543!3d-25.348794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7010ad1198a0dec1!2sWhite%20House%20Lodge!5e0!3m2!1sen!2sza!4v1656595404887!5m2!1sen!2sza' width="1700" height="500" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
                </div>
            </div>
        </body>
    );
}
export default HotelInfomation;