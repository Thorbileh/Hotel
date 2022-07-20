import { Link, useNavigate, useLocation } from 'react-router-dom';
import RoomMod from './Room.module.css'
import { useEffect, useState } from 'react';
import { db } from '../../firebase/index';
import { collection, getDocs } from 'firebase/firestore';


const Rooms = () => {
    const navigate = useNavigate();
    const [RoomsInfo, setRoomsInfo] = useState([]);



    const [guest, setGuest] = useState([]);
    const userTableRef = collection(db, 'Country Boutique')
    useEffect(() => {
        const getguest = async () => {
            const data = await getDocs(userTableRef)
            setGuest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getguest();
    }, [])

    const bookNow = async(data) => {

        navigate("/Book", { state: { data: data } })
    }

    return (
        <body >
            <div className={RoomMod.body}>
                <nav className={RoomMod.hotNav}>
                    <Link to="/">Home</Link>
                    <Link to="/Book">Book</Link>
                    <Link to="/Rooms" >Rooms</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/Activities">Activities</Link>
                    <Link to="/Location">Location</Link>
                </nav>
                <div className={RoomMod.rooms}>

                    <h2 className={RoomMod.h2}>Rooms & Suites</h2>
                    <div className={RoomMod.roomType}>

                        {guest.map((value, id) => (
                            <div className={RoomMod.superiorDoubleRoom} key={id}>
                                 <div className={RoomMod.part1}>
                                <img src={value.RoomPic} />
                                </div>
                                <div className={RoomMod.part1}>
                                <h3>{value.Type}</h3>
                                <h6>{value.WhatIsInside}</h6>
                                <ul>
                                    <li>2</li>
                                    <li>Double</li>
                                    <li>30m</li>
                                    <li>Queen Bed & Sofa</li>
                                    <li>1528987456</li>
                                </ul>
                                <h4>R{value.Price} </h4><h5>/per night</h5>
                                <button type='submit' onClick={bookNow}>Book Now</button>
                                </div>
                                
                                
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className={RoomMod.lastPasrt}>
                <div className={RoomMod.contact}>
                    <h1>Contact Us</h1>
                    <ul>
                        <li>About To Do</li>
                        <li>315 Grand Ave,Coconut Grove,merrick way,FL 1234444</li>
                        <li>hello@hotelname.com</li>
                        <li>076 123 2522</li>
                        <li>011 586 1200</li>
                    </ul>
                </div>
                <div className={RoomMod.ForCustomer}>
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
            <div className={RoomMod.maps} >
                <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14423.00086767588!2d31.0082387!3d-25.3461615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f072c98efbb03bb!2sCountry%20Boutique%20Hotel!5e0!3m2!1sen!2sza!4v1656595069968!5m2!1sen!2sza' width="1700" height="500" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </body>
    );
}
export default Rooms;