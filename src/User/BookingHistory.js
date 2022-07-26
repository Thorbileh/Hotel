import { Link, useNavigate, useLocation } from 'react-router-dom';
import detailsMod from './History.module.css'
import { useEffect, useState } from 'react';
import { db } from '../firebase/index';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import NavBar from '../navBar';
import LogOut from './logOut';

const BookingHistory = () => {
    const [guest, setGuest] = useState([]);
    const userTableRef = collection(db, 'Bookings')
    useEffect(() => {

        const getguest = async () => {
            const data = await getDocs(userTableRef)
            setGuest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getguest();
    }, [])

    const deleteBooking = async (id)=>{
const userDoc =doc(db,'Bookings',id);
await deleteDoc(userDoc);
    }
    return (
        <body >
            <NavBar />
            <div className={detailsMod.body}>
            <LogOut/>
                <h1>Booking Recieved</h1>
                <div className={detailsMod.table1}>


                    {guest.map((user) => {
                        return (
                            <table>
                                <h2>Booking Details</h2>
                                <tr>
                                    {/*   <th>Hotel Name</th> */}
                                    <th>Room Type</th>
                                    <th>Check-In</th>
                                    <th>Check-Out</th>
                                    <th>Total</th>
                                    {/* <th>status</th> */}
                                </tr>
                                <tr>
                                    <td>{user.accomodation}</td>
                                    <td>{user.checkIn}</td>
                                    <td>{user.checkOut}</td>
                                    <td>R {user.Total}</td>
                                    {/* <td>{user.status}</td> */}
                                </tr>
                                <h2>Payment Details</h2>
                                <tr>

                                    <th>Payment</th>
                                    <th>Date</th>
                                    <th>Payment method</th>
                                    <th>Total</th>

                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>{user.checkIn}</td>
                                    <td>{user.paymnet}</td>
                                    <td>R {user.Total}</td>

                                </tr>
                                <button onClick={() => { deleteBooking (user.id) }}>Cancel booking</button>
                                <button>Update booking</button>
                            </table>

                        )
                    })}



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
export default BookingHistory;