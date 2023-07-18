import React from 'react'
import './Bookingform.css'


const BookingForm = ({bookingData, availableTimes, handleSumbit, handleInputChange}) => {

  return (
  <div className='bookingform__form section'>
  <form className='bookingform__spaceform' onSubmit={handleSumbit}>
  <label htmlFor="res-date">Choose date</label>
  <input
  type="date"
  id="res-date"
  name="date"
  value={bookingData.date}
  onChange={handleInputChange}
  required
  />

  <label htmlFor="res-time">Choose time</label>
  <select id="res-time" name="time" value={bookingData.time} onChange={handleInputChange} required>
  {availableTimes.map((time) =>(
    <option key={time} value={time}>
      {time}
    </option>
   ))}
  </select>
  <label htmlFor="guests">Number of guests</label>
  <input
  type="number"
  placeholder={1}
  min={2}
  max={10}
  id="guests"
  name="guests"
  value={bookingData.guests}
  onChange={handleInputChange}
  required
  />
  <label htmlFor="occasion">Occasion</label>
  <select id="occasion" name="occasion" value={bookingData.occasion} onChange={handleInputChange} required>
    <option>Birthday</option>
    <option>Anniversary</option>
  </select>
  <input className='bookingform_submit' value='Booking' type="submit" defaultValue="Make Your reservation"/>
  </form>
  </div>
  )
}

export default BookingForm