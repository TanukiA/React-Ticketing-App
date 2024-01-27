import React, { useEffect, useState } from 'react';
import expoPic from '../assets/img/expo-cover.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/css/CustomerHome.css';
import axios from 'axios';

function CustomerHome(){

  const [ ticketData, setTicketData ] = useState({});

  useEffect(() => {
    axios.get('/api/ticket-listing')
      .then(response => setTicketData(response.data))
      .catch(error => console.log(error));
  }, []);

  return(
    <span>
      <div className="image-container">
        <img alt="Expo Pic" src={expoPic} width="1280" height="270"/>
        <div className="image-text">DigitalExpo at ABC Exhibition Centre<br/>1/1/2024 - 25/2/2024</div>
      </div>
      <DateSelector/>
    </span>
  );
}

function DateSelector(){
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2024-02-25');
  // Set default date (today or the start of the range if today is outside the range)
  const defaultDate = new Date() < startDate ? startDate : new Date();

  const [selectedDate, setSelectedDate] = useState(defaultDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleArrowChange = (offset) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + offset);
    // Ensure the new date is within the exhibition period
    if (newDate >= startDate && newDate <= endDate) {
      setSelectedDate(newDate);
    }
  };

  return (
    <div className="date-container">
      <span>Book ticket now:</span>
      <button onClick={() => handleArrowChange(-1)}>&lt;</button>
      <span style={{fontWeight: 'bold'}}>{selectedDate.toDateString()}</span>
      <button onClick={() => handleArrowChange(1)}>&gt;</button>
      <DatePicker selected={selectedDate} onChange={handleDateChange} minDate={startDate} maxDate={endDate}/>
    </div>
  );
};

function TicketListing(){
  return(
    <div></div>
  );
}

export default CustomerHome;