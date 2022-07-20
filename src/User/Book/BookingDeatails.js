import { Link, useNavigate, useLocation } from 'react-router-dom';
import detailsMod from './BookingDeatails.module.css'
import { useEffect, useState } from 'react';
import { db } from '../../firebase/index';
import {collection, getDocs} from 'firebase/firestore';

const BookingDeatails = () => {
    const [guest, setGuest] = useState([]);
    const userTableRef =collection(db,'BookingStorage')
useEffect(() =>{

    const getguest =async()=>{
const data =await getDocs(userTableRef)
setGuest(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getguest();
},[])

    return (
        <body >
            <div className={detailsMod.body}>
                <nav className={detailsMod.hotNav}>
                    <Link to="/">Home</Link>
                    <Link to="/Book">Book</Link>
                    <Link to="/Rooms" >Rooms</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/Activities">Activities</Link>
                    <Link to="Location">Location</Link>
                </nav>
                <h1>Booking Recieved</h1>

                <div className={detailsMod.table1}>
                    <h4>We are pleasd to inform you that your reservation request has been recieved</h4>
                    <h2>Booking Details</h2>
                    {guest.map((user)=>{
                            return(
                                <table>
                        
                                <tr>
                                    <th>Booking</th>
                                    <th>Check-In</th>
                                    <th>Check-Out</th>
                                    <th>Total</th>
                                    <th>status</th>
                                </tr>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.checkIn}</td>
                                    <td>{user.checkOut}</td>
                                    <td>{user.Total}</td>
                                    <td>{user.status}</td>
                                </tr>
                                <tr>
                            <th>Payment</th>
                            <th>Date</th>
                            <th>Payment method</th>
                            <th>Total</th>
                            <th>status</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>{user.checkIn}</td>
                            <td>{user.paymnet}</td>
                            <td>{user.Total}</td>
                            <td>onHold</td>
                        </tr>

                            </table>
                            )
                        })}
                   
                    <h3>Details:Superior Double Room</h3>
                    <h2>Payment Details</h2>
                    <table>
                        
                    </table>
                </div>
            </div>

            <div className={detailsMod.lastPasrt}>
                <div className={detailsMod.contact}>
                    <h1>Contact Us</h1>
                    <ul>
                        <li>About To Do</li>
                        <li>315 Grand Ave,Coconut Grove,merrick way,FL 1234444</li>
                        <li>hello@hotelname.com</li>
                        <li>076 123 2522</li>
                        <li>011 586 1200</li>
                    </ul>
                </div>
                <div className={detailsMod.ForCustomer}>
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
export default BookingDeatails;