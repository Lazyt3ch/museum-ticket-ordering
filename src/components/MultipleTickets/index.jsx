import React from 'react';
import "./index.css";

function MultipleTickets(props) {
  const {
    numTickets,
    setNumTickets,
  } = props;

  return (
    <div className="multiple-tickets">
      <div className="multiple-tickets__remove-wrapper">
        <button 
          className={`multiple-tickets__remove`} 
          disabled={!numTickets}
          onClick={() => setNumTickets(0)}
        >
          Удалить
        </button> 
      </div>

      <div className="multiple-tickets__increment-decrement-wrapper">
        <button 
          className={`multiple-tickets__decrement`} 
          disabled={numTickets < 1}
          onClick={() => setNumTickets((prev) => prev - 1)}
        >
          &ndash;
        </button>      

        <div className="multiple-tickets__subtotal">
          {numTickets}
        </div>

        <button 
          className={`multiple-tickets__increment`} 
          onClick={() => setNumTickets((prev) => prev + 1)}
          autoFocus 
        >
          +
        </button> 
      </div>      


    </div>
  )
}

export default MultipleTickets;