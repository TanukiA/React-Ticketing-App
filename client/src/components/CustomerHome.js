import React, { useEffect, useState } from 'react';
import expoPic from '../assets/img/expo-cover.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/css/CustomerHome.css';

function CustomerHome(){
  return(
    <span>
      <div className="image-container">
        <img alt="Expo Pic" src={expoPic} width="1200" height="260"/>
      </div>
      <DateSelector/>
    </span>
  );
}

function DateSelector(){
  // Set default date (today)
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleArrowChange = (offset) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + offset);
    setSelectedDate(newDate);
  };

  return (
    <div className="date-container">
      <span>Book your ticket for:</span>
      <button onClick={() => handleArrowChange(-1)}>&lt;</button>
      <span style={{fontWeight: 'bold'}}>{selectedDate.toDateString()}</span>
      <button onClick={() => handleArrowChange(1)}>&gt;</button>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default CustomerHome;