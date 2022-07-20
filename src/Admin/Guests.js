import { Link, useNavigate, useLocation } from 'react-router-dom';
import guestMod from './Guests.module.css'
import { useEffect, useState } from 'react';
import { db } from '../firebase/index';
import {addDoc, collection, getDocs} from 'firebase/firestore';
import Data from '../User/data';

const Guests = () => {
    const [status,setStatus] =useState('')
    const [checkIn,setCheckIn] =useState('');
    const [checkOut,setCheckOut] =useState('');
    const [accomodation,setAccomodation] =useState('');
    const [adults,setAdults] =useState(0);
    const [children,setChildren] =useState(0);
    const [FirstName,setFirstName] =useState('');
    const [lastName,setLastName] =useState('');
    const [email,setEmail] =useState('');
    const [Phone,setPhone] =useState('');
    const [paymnet,setPayment] =useState('');
    const [Total,setTotal] =useState(0);
    const [guest, setGuest] = useState([]);
    const userTableRef =collection(db,'BookingStorage')
useEffect(() =>{

    const getguest =async()=>{
const data =await getDocs(userTableRef)
setGuest(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getguest();
},[])

const reject = async(data) => {
    setStatus ='rejected'
    await addDoc(userTableRef,{status:'status',checkOut:checkOut,accomodation:accomodation,adults:adults,
        children:children,FirstName:FirstName,lastName:lastName,email:email,Phone:Phone,paymnet:paymnet,Total:Total})
    console.log(data)
 }
    return (
        <body >
            <div className={guestMod.body}>
                <nav className={guestMod.hotNav}>
                    <Link to="/">Home</Link>
                    <Link to="/Book">Book</Link>
                    <Link to="/Rooms" >Rooms</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/Activities">Activities</Link>
                    <Link to="Location">Location</Link>
                </nav>
        
                <div className={guestMod.table1}>
    
                                <table>
                        
                                <tr>
                                    <th>Name </th>
                                    <th>Email</th>
                                    <th>phone number</th>
                                    <th>Hotel Name</th>
                                    <th>Room Type</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                 
                                    
                                </tr>
                                {guest.map((user)=>{
                            return(
                                <tr>
                                    <td>{user.FirstName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.Phone}</td>
                                    <td>{user.total}</td>
                                    <td>{user.accomodation}</td>
                                    <td>{user.payment}</td>
                                    <td><button className={guestMod.accept}>Accept</button><button className={guestMod.reject} onClick={reject}>Reject</button></td>
                                </tr>

)
})}
                            </table>
                </div>
            </div>

            <div className={guestMod.lastPasrt}>
                <div className={guestMod.contact}>
                    <h1>Contact Us</h1>
                    <ul>
                        <li>About To Do</li>
                        <li>315 Grand Ave,Coconut Grove,merrick way,FL 1234444</li>
                        <li>hello@hotelname.com</li>
                        <li>076 123 2522</li>
                        <li>011 586 1200</li>
                    </ul>
                </div>
                <div className={guestMod.ForCustomer}>
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
export default Guests;