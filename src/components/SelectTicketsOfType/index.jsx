import React from 'react';
import "./index.css";

function SelectTicketsOfType(props) {
  const {
    ticketTitle,
    ticketPrice,
    ticketDescription = "",
    infoButton = null,
    contactPhone = "",
    addButton = null,
  } = props;
  

  return (
    <div className="select-tickets">
      <div select-tickets select-tickets-header>
        
      </div> 
    </div>
  )
}

export default SelectTicketsOfType;