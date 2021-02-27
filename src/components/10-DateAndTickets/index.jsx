import React from 'react';
import "./index.css";

import Tickets from "../Tickets";
import DatePicker from "../DatePicker";

function DateAndTickets(props) {

  return (
    <>
      <div className="date-and-tickets__logo">
        LOGO
      </div>

      <div className="date-and-tickets__header">
        <span>Покупка билета</span>
      </div>    

      <div className="date-and-tickets">
        <DatePicker />

        <Tickets />


        SelectDateAndTickets
      </div>
    </>
  );
}

export default DateAndTickets;