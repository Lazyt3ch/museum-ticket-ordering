import React, {useState} from 'react';
import "./index.css";

function Tickets(props) {
  const { // TODO: Remove dummy values!!!
    ticketTitle = "Семейный",
    ticketPrice = "2 800 ₽",
    ordinaryText = "2 взрослых 1 ребёнок",
    importantText = "",
    isInfoButton = false,
    infoPopupText = "",
    isAddButton = false,
  } = props.data;

  // eslint-disable-next-line
  const [isInfoButtonHovered, setIsInfoButtonHovered] = useState(false);  

  return (
    <div className="tickets">
      <div className="tickets__header">
        <div className="tickets__title">{ticketTitle}</div>
        { isInfoButton && <button className="tickets__info-button">info</button> }
        <div className="tickets__price">{ticketPrice}</div>
      </div> 
      
      { (ordinaryText.trim().length > 0) && <div className="tickets__ordinary-text">
        {ordinaryText}
      </div> }

      { (importantText.trim().length > 0) && <div className="tickets__ordinary-text_important">
        {importantText}
      </div> }

      { isAddButton && <button className="tickets__add-button">Добавить</button> }

      { isInfoButton && isInfoButtonHovered 
          && <div className="tickets__info-popup tickets__info-popup_active">{infoPopupText}</div> 
      }

    </div>
  )
}

export default Tickets;