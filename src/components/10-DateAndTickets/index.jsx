import React, {useState} from 'react';
import "./index.css";

import Tickets from "../Tickets";
import DatePicker from "../DatePicker";

function DateAndTickets(props) {
  const ticketsData = [ // TODO: Implement data fetching
    {
      ticketTitle: "Взрослый",
      ticketPrice: "1 150 ₽",
      ordinaryText: "",
      importantText: "",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: true,    
    },
    {
      ticketTitle: "Семейный", // #1
      ticketPrice: "2 800 ₽",
      ordinaryText: "2 взрослых 1 ребёнок",
      importantText: "",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: true,    
    },
    {
      ticketTitle: "Семейный", // #2
      ticketPrice: "3 600 ₽",
      ordinaryText: "2 взрослых 2 ребёнка",
      importantText: "",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: true,    
    },
    {
      ticketTitle: "Групповой взрослый",
      ticketPrice: "850 ₽",
      ordinaryText: "от 10 человек",
      importantText: "",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: true,    
    },
    {
      ticketTitle: "Групповой школьный 12+",
      ticketPrice: "650 ₽",
      ordinaryText: "От 10 человек Покупка билетов осуществляется только по предварительной записи.",
      importantText: "+7 (499) 643-82-38",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: false,    
    },
    {
      ticketTitle: "Льготный",
      ticketPrice: "800 ₽",
      ordinaryText: "(Дети до 18 лет, студенты, пенсионеры, члены многодетных семей)",
      importantText: "",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: false,    
    },
  ];  

   // eslint-disable-next-line
  const [total, setTotal] = useState(0);

  return (
    <>
      <div className="date-and-tickets__container">
        <div className="date-and-tickets__header">
          <span>Покупка билета</span>
        </div>    

        <div className="date-and-tickets">
          <DatePicker />

          <div className="date-and-tickets__tickets">
            { ticketsData.map((data, idx) => 
                <Tickets key={idx} data={data} /> 
              )
            }         
          </div>
        </div>

        <div className="date-and-tickets__footer">
          <div className="date-and-tickets__total">
            Итого: {total} ₽ 
          </div>

          <button className="date-and-tickets__go-to-payment">
            Перейти к оплате
          </button>
        </div>   

      </div>
    </>
  );
}

export default DateAndTickets;