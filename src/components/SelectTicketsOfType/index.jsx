import React from 'react';
import "./index.css";

function SelectTicketsOfType(props) {
  const { // TODO: Remove dummy values!!!
    ticketTitle = "Взрослый",
    ticketPrice = "1 150 ₽",
    ticketDescription = "",
    infoButton = null,
    contactPhone = "",
    addButton = null,
  } = props;
  

  return (
    <div className="select-tickets">
      <div className="select-tickets select-tickets-header">
        <span className="ticket-title">ticketTitle</span>
        <span className="ticket-price">ticketPrice</span>
      </div> 
    </div>
  )
}

export default SelectTicketsOfType;