import React, {useState} from 'react';
import "./index.css";
import Popup from "../Popup";

function Tickets(props) {
  const { // TODO: Remove dummy values!!!
    ticketTitle = "Семейный",
    ticketPrice = "2 800 ₽",
    ordinaryText = "2 взрослых 1 ребёнок",
    importantText = "",
    isInfoButton = false,
    infoPopupText = "",
    isAddButton = false,
    isDateSelected = false,
  } = props.data;

  // const {
  //   isDateSelected
  // } = props;

  // eslint-disable-next-line
  const [isInfoButtonHovered, setIsInfoButtonHovered] = useState(false);  

  console.log("isInfoButton =", isInfoButton);
  console.log("infoPopupText =", infoPopupText);

  return (
    <div className="tickets">
      <div className="tickets__header">
        <div className="tickets__title-and-popup-button">
          <div className="tickets__title">{ticketTitle}</div>
          { isInfoButton && infoPopupText.trim().length 
            && <Popup infoPopupText={infoPopupText} /> }
        </div>        
        
        <div className="tickets__price">{ticketPrice}</div>
      </div> 
      
      { (ordinaryText.trim().length > 0) && <div className="tickets__text">
        {ordinaryText}
      </div> }

      { (importantText.trim().length > 0) && <div className="tickets__text tickets__text_important">
        {importantText}
      </div> }

      { isAddButton && 
          <button 
            className={`tickets__add-button ${isDateSelected ? "tickets__add-button_enabled" : ""}`} 
            disabled={!isDateSelected}
          >
            Добавить
          </button> 
      }

      { isInfoButton && isInfoButtonHovered 
          && <div className="tickets__info-popup tickets__info-popup_active">{infoPopupText}</div> 
      }

    </div>
  )
}

export default Tickets;