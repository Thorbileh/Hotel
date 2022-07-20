import React from 'react';
//import './Components/Landing';
// import Landing from './Components/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* import Register from './User/UI/register' */
import Signup from './User/UI/signup';
import Login from './User/UI/Login'
import Landing from './User/Landing';
import CountryBoutiqueInfo from './User/HotelInfo/CountryBoutiqueInfo';
import HouseLodge from './User/HotelInfo/HouseLodge';
import KhayalamiInfo from './User/HotelInfo/KhayalamiInfo';
import Book from './User/Book/Book';
import CountryRooms from './User/Rooms/CountryRooms';
import HouseLodgeRooms from './User/Rooms/HouseLodgeRooms';
import KhayaLamiRooms from './User/Rooms/KhayaLamiRooms';
import BookingDeatails from './User/Book/BookingDeatails';
import Guests from './Admin/Guests';
import Hotels from './Admin/Hotels';
import AddRooms from './Admin/AddRooms';
import AddCountry from './Admin/AddCountry';
import AddHouse from './Admin/AddHouse';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/CountryBoutiqueInfo" element={<CountryBoutiqueInfo />} />
          <Route exact path="/KhayalamiInfo" element={<KhayalamiInfo />} />
          <Route exact path="/HouseLodge" element={<HouseLodge />} />
          <Route exact path="/Book" element={<Book />} />
          <Route exact path="/CountryRooms" element={<CountryRooms />} />
          <Route exact path="/HouseLodgeRooms" element={<HouseLodgeRooms />} />
          <Route exact path="/KhayaLamiRooms" element={<KhayaLamiRooms />} />
          <Route exact path="/BookingDeatails" element={<BookingDeatails />} />
          <Route exact path="/Guests" element={<Guests />} />
          <Route exact path="/Hotels" element={<Hotels />} />
          <Route exact path="/AddRooms" element={<AddRooms />} />
          <Route exact path="/AddHouse" element={<AddHouse />} />
          <Route exact path="/AddCountry" element={<AddCountry />} />


        </Routes>

      </Router>
    </div>

  );
}

export default App;
