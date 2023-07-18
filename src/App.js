import logo from './logo.svg';
import './App.css';
import { Bookingform, Header, ConfirmBooking } from './components';
import fetchAPI from './api';
import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router';
import submitAPI from './submitAPI';

function App() {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });
  const [toogle, setToogle] = useState(false);
  const navigate = useNavigate();
  const submitForm = (formData) =>{
    const response = submitAPI(formData);
    if(response && setToogle(true)){
      navigate('/booking');
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
      setBookingData({ ...bookingData, [name]: value });
  };

  const handleSumbit = (e) =>{
    e.preventDefault();
  }
  const updateTimes = (state, action) => {
    const { date } = action; // Get the selected date from the action
    const availableTimes = fetchAPI(date);
    return availableTimes;
  };

  const initializeTimes = () => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
    const availableTimes = fetchAPI(formattedDate); // Call fetchAPI to get available times
    return availableTimes;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div>
      <Header />
      {
        toogle ? (
          <ConfirmBooking />
        ):(
          <Bookingform
          bookingData={bookingData}
          availableTimes={availableTimes}
          handleSumbit={submitForm}
          handleInputChange={handleInputChange}
          />
        )
      }
      <Routes>
        <Route path='/booking'  Component={ConfirmBooking}/>
      </Routes>
    </div>
  );
}

export default App;
