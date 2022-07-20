import { Link, useNavigate } from 'react-router-dom';
import image1 from './images/220156854.webp';
import hotel1 from './images/Country_Boutique_Hotel/country-boutique-hote.jpg'
import hotel2 from './images/House Lodge/white-house-lodge1.jpg'
import hotel3 from './images/Khayalami Hotel/khayalami-boutique-hotel (1).jpg'
import LandingModule from './Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import { logout, useAuth } from '../firebase/index';
// import Profile from './profile';
import Profile from './UI/profile'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

library.add(faStar);

const Landing = () => {
  const navigate = useNavigate();
  //to get the current user logged into your website
  const currentUser = useAuth();

  const userTableRef = collection(db, 'Hotel')

  //for the program not to take time when it loads information to firebase
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getguest = async () => {
      const data = await getDocs(userTableRef)
      setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(hotels)
    }
    getguest();
  },[])

  const viewMore1 = (data) => {

    navigate("/HouseLodge",{state:{data:data}})
  }
  
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
    <body>
      
      <div className={LandingModule.fill}>
      
        <img src={image1} alt="" width='1800' />
        <nav>
        <div >   {currentUser && <>
        <Profile />
        <button disabled={loading || !currentUser} onClick={handleLogout}>Log out</button>
      </>}</div>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/Login">Login</Link>
          <Link to="/About">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Services">Services</Link>

        </nav>

        <div className={LandingModule.find}>
          <h1>Find A place You Want To Visit</h1>
          <p>Search Low Prices on your favourable hotel</p>
        </div>
      </div>
      <div className={LandingModule.search}>
        <div className={LandingModule.destination} >
          Select&nbsp;destination
          <select class="Destination" name="" >
            <option value="Country Boutique Hotel" class='option'>Country Boutique Hotel</option>
            <option value="Dunkeld Country & Equestrian Estate" class='option'>Dunkeld Country & Equestrian Estate</option>
            <option value="House Lodge" class='option'>House Lodge</option>
            <option value="Ingwenyama Conference & Sports Resort" class='option'>Ingwenyama Conference & Sports Resort</option>
            <option value="Khayalami Hotel" class='option'>Khayalami Hotel</option>
            <option value="Welgelegen Manor" class='option'>Welgelegen Manor</option>
          </select>
        </div>

        <div className={LandingModule.destination}>
          Check-In<br />
          <input type="date" id="checkIn" name="checkIn" />
        </div>
        <div className={LandingModule.destination}>
          Check-Out<br /><input type="date" id="checkout" name="checkout" />
        </div>
        <div className={LandingModule.destination}>
          Adults<br />
          <input type="number" name="" placeholder="0" />
        </div>
        <div className={LandingModule.destination}>
          Children<br />
          <input type="number" name="" placeholder="0" />
        </div>
        <div className={LandingModule.destination}>
          <button type="submit" name="button" class="butSearch">Search</button>
        </div>


      </div>
      <div className={LandingModule.destinPopular}>
        <h2>Destination</h2>
        <h1>Place To Be</h1>
      </div>
      <div className={LandingModule.Hotels}>
        {hotels.map((value, id) => (
          <div className={LandingModule.Country} key={id}>
            <img src={value.Image} /><br />
            <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star " /></span>
            <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star " /></span>
            <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star" /></span>
            <span className={LandingModule.checked}><FontAwesomeIcon icon="fa-solid fa-star" /></span>
            <span ><FontAwesomeIcon icon="fa-solid fa-star" /></span>
            <h3>{value.HotelName} </h3>
            <button type="submit" name="button" onClick={() =>viewMore1(value)}>View More</button>
          </div>
        ))}




      </div>
      <div className={LandingModule.whyUs}>
        <h2 className={LandingModule.pi}>Why Choose Us</h2>

        <div >
          <h2>Best Price Guarantee</h2>
          <p>xcdc vddrghrth rthrthrt rthrthr rthrthrr
            rthth rrht trhhy rthyry ryrh accesskey="rrr rh
            rrhrt rhy rfrthjuthrrtr tghrthjsk skjhewdhbc
            eyceydhc tghrthjskdbdchb
            brthrt
            "</p>

        </div>
        <div >
          <h2>Best Price Guarantee</h2>
          <p>xcdc vddrghrth rthrthrt rthrthr rthrthrr
            rthth rrht trhhy rthyry ryrh accesskey="rrr rh
            rrhrt rhy rfrthjuthrrtr tghrthjsk skjhewdhbc
            eyceydhc tghrthjskdbdchb
            brthrtuyiyuiykh
            ljkl</p>

        </div>
        <div >
          <h2>World Class Services</h2>
          <p>xcdc vddrghrth rthrthrt rthrthr rthrthrr
            rthth rrht trhhy rthyry ryrh accesskey="rrr rh
            rrhrt rhy rfrthjuthrrtr tghrthjsk skjhewdhbc
            eyceydhc tghrthjskdbdchb
            brthrt
            "</p>

        </div>

      </div>
    </body>
  );
}
export default Landing;