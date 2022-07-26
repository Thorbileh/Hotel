import { Link, useNavigate, useLocation } from 'react-router-dom';
import RoomMod from './Room.module.css'
import { useEffect, useState } from 'react';
import { db } from '../firebase/index';
import { collection, getDocs } from 'firebase/firestore';
import NavBar from '../navBar';
import LogOut from './logOut';


const Rooms = () => {
    const navigate = useNavigate();

  const userTableRef = collection(db, 'Hotel')

  //for the program not to take time when it loads information to firebase
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  /* const { state } = useLocation()
  const { data } = state */
  const [hotelss, setHotelss] = useState({})

  useEffect(() => {
    const getguest = async () => {
      const data = await getDocs(userTableRef)
      setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(hotels)
    }
    getguest();
  },[])

  const bookNow = (data) => {

    navigate("/Book", { state: { data: data } })
  }
   
    /* useEffect(() => {
        setHotelss(data)
    }) */

    return (
        <body >
          <NavBar/>
            <div className={RoomMod.rooms}>
            <LogOut/>
                <h2 className={RoomMod.h2}>Rooms & Suites</h2>
                <div className={RoomMod.roomType}>

            

                    {hotels.map((value, id) => (
                        <diV className={RoomMod.output}>
                            <div className={RoomMod.roomType}>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14422.686953401464!2d31.043543!3d-25.348794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7010ad1198a0dec1!2sWhite%20House%20Lodge!5e0!3m2!1sen!2sza!4v1658669766620!5m2!1sen!2sza" ></iframe>
                            </div>
                            <div className={RoomMod.roomType}>
                                <img src={value.Image}></img>
                            </div>
                            <div className={RoomMod.roomTy} key={id}>
                                <h2>{value.HotelName}</h2>
                                <h3>{value.RoomType}</h3>
                                <h4>R {value.Price} <span>/per night</span></h4>
                                <h6>{value.WhatIsInside}</h6>
                                <button type='submit' onClick={()=>bookNow(value)}>Book Now</button>
                            </div>
                            
                        </diV>

                    ))}


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

        </body>
    );
}
export default Rooms;