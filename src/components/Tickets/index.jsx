import React, {useState, useEffect} from 'react';
// import {useState, useEffect} from 'preact-compat';
import "./index.css";
import Popup from "../Popup";
import MultipleTickets from "../MultipleTickets";
import getFormatedPrice from "../../utils/getFormatedPrice";

function Tickets(props) {
  const { 
    ticketTitle,
    price,
    currency = "₽",
    ordinaryText,
    importantText = "",
    isInfoButton = false,
    infoPopupText = "",
    isAddButton = false,    
  } = props.data;

  const {
    selectedDate = null,
    setSubTotals,
    idx
  } = props;

  const [numTickets, setNumTickets] = useState(0);

  useEffect(
    () => {
      setSubTotals((prev) => {
        const updatedSubTotals = prev.slice();
        updatedSubTotals[idx] = numTickets * price;
        return updatedSubTotals;
      });
    },
    [numTickets, price, setSubTotals, idx]
  );

  return (
    <div className="tickets">
      <div className="tickets__header">
        <div className="tickets__title-and-popup-button">
          <div className="tickets__title">{ticketTitle}</div>
          { isInfoButton && infoPopupText.trim().length 
            && <Popup infoPopupText={infoPopupText} /> }
        </div>        
        
        <div className="tickets__price">{getFormatedPrice(price, currency)}</div>
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
              tabIndex={0}
              autoFocus
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
    </div>
  )
}

export default Tickets;