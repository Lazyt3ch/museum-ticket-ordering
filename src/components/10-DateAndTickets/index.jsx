import React from 'react';
import "./index.css";

import Tickets from "../Tickets";
import DatePicker from "../DatePicker";

function DateAndTickets(props) {
  const ticketsData = [ // TODO: Implement data fetching
  {
    ticketTitle: "Взрослый",
    ticketPrice: "1 150 ₽",
    ticketDescription: "",
    isInfoButton: false,
    infoPopupText: "",
    contactPhone: "",
    isAddButton: true,    
  },
  {
    ticketTitle: "Семейный", // #1
    ticketPrice: "2 800 ₽",
    ticketDescription: "2 взрослых 1 ребёнок",
    isInfoButton: false,
    infoPopupText: "",
    importantText: "",
    isAddButton: true,    
  },
  {
    ticketTitle: "Семейный", // #2
    ticketPrice: "3 600 ₽",
    ticketDescription: "2 взрослых 2 ребёнка",
    isInfoButton: false,
    infoPopupText: "",
    importantText: "",
    isAddButton: true,    
  },
  {
    ticketTitle: "Групповой взрослый",
    ticketPrice: "850 ₽",
    ticketDescription: "от 10 человек",
    isInfoButton: false,
    infoPopupText: "",
    contactPhone: "",
    isAddButton: true,    
  },
  {
    ticketTitle: "Групповой школьный 12+",
    ticketPrice: "650 ₽",
    ticketDescription: "От 10 человек Покупка билетов осуществляется только по предварительной записи.+7 (499) 643-82-38",
    isInfoButton: false,
    infoPopupText: "",
    contactPhone: "",
    isAddButton: false,    
  },
  {
    ticketTitle: "Семейный",
    ticketPrice: "2 800 ₽",
    ticketDescription: "2 взрослых 1 ребёнок",
    isInfoButton: false,
    infoPopupText: "",
    contactPhone: "",
    isAddButton: false,    
  },

  ];
  

  return (
    <>
      <div className="date-and-tickets__container">
        <div className="date-and-tickets__header">
          <span>Покупка билета</span>
        </div>    

        <div className="date-and-tickets">
          <DatePicker />

          <Tickets ticketsData={ticketsData} />


          SelectDateAndTickets
        </div>
      </div>
    </>
  );
}

export default DateAndTickets;