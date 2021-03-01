import React, {useState} from 'react';
import "./index.css";

import Tickets from "../Tickets";
import DatePicker from "../DatePicker";

function DateAndTickets(props) {
  const priceInfo = "Стоимость билета в праздничные дни рассчитывается по тарифу выходного дня";

  const ticketsData = [ // TODO: Implement data fetching
    {
      ticketTitle: "Взрослый",
      price: 1150,
      currency: "₽",
      ordinaryText: "",
      importantText: "",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: true,    
    },
    {
      ticketTitle: "Семейный", // #1
      price: 2800,
      currency: "₽",
      ordinaryText: "2 взрослых 1 ребёнок",
      importantText: "",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: true,    
    },
    {
      ticketTitle: "Семейный", // #2
      price: 3600,
      currency: "₽",
      ordinaryText: "2 взрослых 2 ребёнка",
      importantText: "",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: true,    
    },
    {
      ticketTitle: "Групповой взрослый",
      price: 850,
      currency: "₽",
      ordinaryText: "от 10 человек",
      importantText: "",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: true,    
    },
    {
      ticketTitle: "Групповой школьный 12+",
      price: 650,
      currency: "₽",
      ordinaryText: "От 10 человек Покупка билетов осуществляется только по предварительной записи.",
      importantText: "+7 (499) 643-82-38",
      isInfoButton: false,
      infoPopupText: "",
      isAddButton: false,    
    },
    {
      ticketTitle: "Льготный",
      price: 800,
      currency: "₽",
      ordinaryText: "(Дети до 18 лет, студенты, пенсионеры, члены многодетных семей)",
      importantText: "",
      isInfoButton: true,
      infoPopupText: "Покупка льготных билетов осуществляется только в кассе выставки при предъявлении документа, подтверждающего льготу",
      isAddButton: false,    
    },
  ];  

  const currencySign = ticketsData[0].currency || "₽";

   // eslint-disable-next-line
  const [total, setTotal] = useState(0);
  // const [isDateSelected, setIsDateSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className="date-and-tickets__container">
        <div className="date-and-tickets__header">
          <div className="date-and-tickets__header-text">Покупка билета</div>
        </div>    

        <div className="date-and-tickets">
          <DatePicker 
            priceInfo={priceInfo}
            // isDateSelected={isDateSelected}
            // setIsDateSelected={setIsDateSelected}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <div className="date-and-tickets__tickets">
            { ticketsData.map((data, idx) => 
                <Tickets 
                  key={idx} 
                  data={data} 
                  selectedDate={selectedDate}
                  setTotal={setTotal}
                /> 
              )
            }         
          </div>
        </div>

        <div className="date-and-tickets__footer">
          <div className="date-and-tickets__total">
            Итого: {total} {currencySign}
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