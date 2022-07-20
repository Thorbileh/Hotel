import { Link, useNavigate, useLocation } from 'react-router-dom';
import BookMod from './Book.module.css'
import { useEffect, useState } from 'react';
import { db } from '../../firebase/index';
import { addDoc, collection } from 'firebase/firestore';


const Book = () => {
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

    
    const { state } = useLocation()
     const { data } = state
     const [users,setUsers] = useState({})

 useEffect(() =>{
    setUsers(data)
   console.log("gyetrwhd",users)
    if(checkIn !== '' && checkOut !== ''){
    
       var start = new Date(checkIn)
       var end = new Date(checkOut)
       setTotal(((end.getTime() - start.getTime())/(24*3600*1000)) * Number(users.Price));
       
    }
}) 


    const navigate =useNavigate();
    const userTableRef =collection(db,'Khayalami')


    const BookNow = async(data) => {
       if(checkIn ==='' || checkOut ==='' || accomodation ===''|| paymnet ===''|| email ===''|| FirstName ===''|| lastName ===''|| Phone ===''){
alert("You didn't fiil all the space")
       }else{
        await addDoc(userTableRef,{status:status,checkIn:checkIn,checkOut:checkOut,accomodation:accomodation,adults:adults,
            children:children,FirstName:FirstName,lastName:lastName,email:email,Phone:Phone,paymnet:paymnet,Total:Total})
        console.log(data)
        // localStorage.setItem("hotelInfo",JSON.stringify(data))
        navigate("/BookingDeatails", { state: { data: data } }) 
       }
       
    }
    return (
        <body >
            <div className={BookMod.body}>
            <h1>Book Here</h1>
            <form className={BookMod.dates}>
                <h2>Booking Date</h2>
                <label>Check-In:</label><input type='date' onChange={(event) =>{setCheckIn(event.target.value)}}/><br></br><br></br>
                <label>Check-Out:</label><input type='date' onChange={(event) =>{setCheckOut(event.target.value)}}></input>
            </form>
            <form className={BookMod.accomodation}>
                <h2>Accomodation </h2>
                <label for="">Accommodation Type:</label>
                <select className='' name="" onChange={(event) =>{setAccomodation(event.target.value)}}>
                <option value="-------SELECT--------" class='option'>-------SELECT--------</option>
                    <option value="Standard Single Room" class='option'>Starndard Single Room</option>
                    <option value="Superior Double Room" class='option'>Superior Double Room</option>
                </select><br></br><br></br>
                
                <label>Adults: </label><input type='number' onChange={(event) =>{setAdults(event.target.value)}}/><br></br><br></br>
                <label>Children: </label> <input type='number' onChange={(event) =>{setChildren(event.target.value)}}></input><br></br>
                <label>Full Guest Name: </label><br></br>
                <input type='text' className={BookMod.fullName}></input>
            </form>
            <form className={BookMod.GuestIInfo}>
            <h2>Personal Information</h2>
                <h6>required fields are followed by *</h6>
                <label>First Name*:</label><br></br><input type='text' onChange={(event) =>{setFirstName(event.target.value)}}></input><br></br>
                <label>last Name*:</label><br></br><input type='text' onChange={(event) =>{setLastName(event.target.value)}}></input><br></br>
                <label>Email*:</label><br></br><input type='text' onChange={(event) =>{setEmail(event.target.value)}}></input><br></br>
                <label>Phone*:</label><br></br><input type='text' onChange={(event) =>{setPhone(event.target.value)}}></input><br></br>

            </form>
            <form className={BookMod.paymentMethod}>
                <h2>Payment Method</h2>
                <input type="radio" id="payment" name="paymentMethod" onChange={(event) =>{setPayment(event.target.value)}}/>
                <label for="payment">Pay On Arrival</label>
                <h6>Pay with cash on arrival</h6>
                <input type="radio" id="PayPal" name="paymentMethod" onChange={(event) =>{setPayment(event.target.value)}}/>
                {}
                <label for="PayPal">Pay Via PayPal</label>
                <h6>Visa,MasterCard,Discover.Use the card number with CVC and valid expiration date</h6>
            </form>
            <h3>Total Price:{users.Price} </h3>
            <div className={BookMod.terms}><input type='checkbox' required/>I've read and accept the terms & conditions*<br></br>
            <button onClick={BookNow}>Book Now</button>
            </div>
            </div>
            
            <div className={BookMod.lastPasrt}>
                <div className={BookMod.contact}>
                    <h1>Contact Us</h1>
                    <ul>
                        <li>About To Do</li>
                        <li>315 Grand Ave,Coconut Grove,merrick way,FL 1234444</li>
                        <li>hello@hotelname.com</li>
                        <li>076 123 2522</li>
                        <li>011 586 1200</li>
                    </ul>
                </div>
                <div className={BookMod.ForCustomer}>
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
export default Book;
