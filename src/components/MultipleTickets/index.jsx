import React from 'react';
import "./index.css";

function MultipleTickets(props) {
  const {
    numTickets,
    setNumTickets,
  } = props;

  const handleRemoveKeyUp = (e) => {
    if (e.code === "Space") {
      setNumTickets(0);
    }
  };

  const handleDecrementKeyUp = (e) => {
    if (e.code === "Space") {
      setNumTickets((prev) => prev - 1);      
    }
  };
  
  const handleIncrementKeyUp = (e) => {
    if (e.code === "Space") {
      setNumTickets((prev) => prev + 1);      
    }
  }; 

  return (
    <div className="multiple-tickets">
      <div className="multiple-tickets__remove-wrapper">
        <button 
          className={`multiple-tickets__remove`} 
          disabled={!numTickets}
          onClick={() => setNumTickets(0)}
          onKeyUp={handleRemoveKeyUp}

        >
          Удалить
        </button> 
      </div>

      <div className="multiple-tickets__increment-decrement-wrapper">
        <button 
          className={`multiple-tickets__decrement`} 
          disabled={numTickets < 1}
          onClick={() => setNumTickets((prev) => prev - 1)}
          onKeyUp={handleDecrementKeyUp}
        >
          &ndash;
        </button>      

        <div className="multiple-tickets__subtotal">
          {numTickets}
        </div>

        <button 
          className={`multiple-tickets__increment`} 
          // disabled={!numTickets}
          onClick={() => setNumTickets((prev) => prev + 1)}
          onKeyUp={handleIncrementKeyUp}
        >
          +
        </button> 
      </div>      


    </div>
  )
}

export default MultipleTickets;