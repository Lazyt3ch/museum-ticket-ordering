import React from 'react';

import SelectTicketsOfType from "../SelectTicketsOfType";

function SelectDateAndTickets(props) {

  return (
    <div className="select-date-and-tickets">
      <div ticket-types-container>
        <SelectTicketsOfType />
      </div>
      SelectDateAndTickets
    </div>
  )
}

export default SelectDateAndTickets;