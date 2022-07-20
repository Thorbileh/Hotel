import { Link, useNavigate, useLocation } from 'react-router-dom';
import hotelMod from './Hotels.module.css'
import { useEffect, useState } from 'react';
import { db } from '../firebase/index';
import Data from '../User/data';

const Hotels = () => {
    const navigate = useNavigate();
    const [arry] = useState(Data)

    const Select = (data) => {
        console.log(data)
        // localStorage.setItem("hotelInfo",JSON.stringify(data))
        navigate("/AddRooms", { state: { data: data } })
    }
    return (
        <body>
            <div className={hotelMod.body}>
                <nav className={hotelMod.hotNav}>
                    <Link to="/">Home</Link>
                    <Link to="/Book">Book</Link>
                    <Link to="/Rooms" >Rooms</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/Activities">Activities</Link>
                    <Link to="Location">Location</Link>
                </nav>
                <h2>Select a Hotel you want To Edit</h2>
                <div className={hotelMod.Hotels} >
                    {arry.map((vaaa, id) => (
                        <div className={hotelMod.Country} key={id}>
                            <img src={vaaa.image} alt={vaaa.image} /><br />
                            <h3>{vaaa.hotelName}</h3>
                            <button type="submit" name="button" className={hotelMod.button} onClick={() => Select(vaaa)}>Select</button>

                        </div>
                    ))}
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

        </body>
    );
}
export default Hotels;