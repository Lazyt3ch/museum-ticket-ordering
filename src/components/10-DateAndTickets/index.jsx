import React from 'react';
import "./index.css";

import TicketsOfType from "../TicketsOfType";
import DatePicker from "../DatePicker";

function DateAndTickets(props) {

  return (
    <div className="date-and-tickets">
      <div date-and-tickets__tickets>
        <TicketsOfType />
      </div>
      SelectDateAndTickets
    </div>
  )
}

export default DateAndTickets;