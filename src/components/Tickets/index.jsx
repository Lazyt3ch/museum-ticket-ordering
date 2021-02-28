import React, {useState} from 'react';
import "./index.css";
import Popup from "../Popup";
import MultipleTickets from "../MultipleTickets";

function Tickets(props) {
  const { // TODO: Remove dummy values!!!
    ticketTitle = "Семейный",
    ticketPrice = "2 800 ₽",
    ordinaryText = "2 взрослых 1 ребёнок",
    importantText = "",
    isInfoButton = false,
    infoPopupText = "",
    isAddButton = false,
    // isDateSelected = false,
    selectedDate = null,
  } = props.data;

  // const {
  //   isDateSelected
  // } = props;

  // eslint-disable-next-line
  const [isInfoButtonHovered, setIsInfoButtonHovered] = useState(false);  
  const [numTickets, setNumTickets] = useState(0);

  // console.log("isInfoButton =", isInfoButton);
  // console.log("infoPopupText =", infoPopupText);

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

      <div className="tickets__handlers">
        { isAddButton && !numTickets &&
            <button 
              className={`tickets__add-button ${selectedDate ? "tickets__add-button_enabled" : ""}`} 
              disabled={!selectedDate}
              onClick={() => setNumTickets(1)}
            >
              Добавить
            </button> 
        }

        { isAddButton && numTickets > 0 &&
            <MultipleTickets 
              numTickets={numTickets}
              setNumTickets={setNumTickets}
            /> 
        }      
      </div>

      { isInfoButton && isInfoButtonHovered 
          && <div className="tickets__info-popup tickets__info-popup_active">{infoPopupText}</div> 
      }

    </div>
  )
}

export default Tickets;