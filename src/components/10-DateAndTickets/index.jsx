import React from 'react';
import "./index.css";

import TicketsOfType from "../TicketsOfType";

function DateAndTickets(props) {

  return (
    <div className="date-and-tickets">
      <div ticket-types-container>
        <TicketsOfType />
      </div>
      SelectDateAndTickets
    </div>
  )
}

export default DateAndTickets;