import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import AdminLogin from './Admin/AdminLogin';
import UserLogin from './User/userLogin';
import AddRoom from './Admin/AddRoom';
import Rooms from './User/Rooms';
import Book from './User/Book';
import Signup from './User/signup';
import BookingDetails from './Admin/BookingDeatails';
import BookingHistory from './User/BookingHistory';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/AdminLogin" element={<AdminLogin />} />
          <Route exact path="/UserLogin" element={<UserLogin />} />
          <Route exact path="/AddRoom" element={<AddRoom />} />
          <Route exact path="/Rooms" element={<Rooms />} />
          <Route exact path="/Book" element={<Book />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/BookingDetails" element={<BookingDetails />} />
          <Route exact path="/BookingHistory" element={<BookingHistory />} />
        </Routes>

      </Router>
    </div>

  );
}

export default App;
