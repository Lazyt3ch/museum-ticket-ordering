import React, {useState} from 'react';
import "./index.css";

function Tickets(props) {
  const { // TODO: Remove dummy values!!!
    ticketTitle = "Семейный",
    ticketPrice = "2 800 ₽",
    ticketDescription = "2 взрослых 1 ребёнок",
    isInfoButton = false,
    infoPopupText = "",
    contactPhone = "",
    isAddButton = false,
  } = props;

  const [isInfoButtonHovered, setIsInfoButtonHovered] = useState(false);  

  return (
    <div className="tickets">
      <div className="tickets__header">
        <div className="tickets__title">{ticketTitle}</div>
        { isInfoButton && <button className="tickets__info-button">info</button> }
        <div className="tickets__price">{ticketPrice}</div>
      </div> 
      
      { ticketDescription.length && <div>{ticketDescription}</div> }

      { isAddButton && <button className="tickets__add-button">Добавить</button> }
      { contactPhone.length && <div className="tickets__contact-phone">{contactPhone}</div> }

      { isInfoButton && isInfoButtonHovered 
          && <div className="tickets__info-popup tickets__info-popup_active">{infoPopupText}</div> 
      }

    </div>
  )
}

export default Tickets;