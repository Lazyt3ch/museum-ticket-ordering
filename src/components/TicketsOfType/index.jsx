import React from 'react';
import "./index.css";

function TicketsOfType(props) {
  const { // TODO: Remove dummy values!!!
    ticketTitle = "Семейный",
    ticketPrice = "2 800 ₽",
    ticketDescription = "2 взрослых 1 ребёнок",
    isInfoButton = false,
    infoText = "",
    contactPhone = "",
    isAddButton = false,
  } = props;
  

  return (
    <div className="tickets">
      <div className="tickets__header">
        <div className="tickets__title">{ticketTitle}</div>
        <div className="tickets__price">{ticketPrice}</div>
      </div> 
      
      { ticketDescription.length && <div>{ticketDescription}</div> }


    </div>
  )
}

export default TicketsOfType;