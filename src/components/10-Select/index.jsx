import React, {useState, useEffect, useMemo} from 'react';
// import {useState, useEffect, useMemo} from 'preact-compat';
import "./index.css";

import Tickets from "../Tickets";
import DatePicker from "../DatePicker";
import Footer from "../Footer";

import getFormatedPrice from "../../utils/getFormatedPrice";

function Select(props) {
  const {
    stageIndex, 
    setStageIndex,
    total,
    setTotal,
    currencySign,
    setCurrencySign,
    selectedDate, 
    setSelectedDate,
  } = props;

  const priceInfo = "Стоимость билета в праздничные дни рассчитывается по тарифу выходного дня";

  const ticketsData = useMemo(() => 
    [ // TODO: Implement data fetching
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
      // {
      //   ticketTitle: "Льготный",
      //   price: 800,
      //   currency: "₽",
      //   ordinaryText: "(Дети до 18 лет, студенты, пенсионеры, члены многодетных семей)",
      //   importantText: "",
      //   isInfoButton: true,
      //   infoPopupText: "Покупка льготных билетов осуществляется только в кассе выставки при предъявлении документа, подтверждающего льготу",
      //   isAddButton: false,    
      // },
    ],
    []
  );

  useEffect(
    () => {
      setCurrencySign(ticketsData[0].currency || "₽");
    },
    [setCurrencySign, ticketsData]
  );
  

  const [subTotals, setSubTotals] = useState(new Array(ticketsData.length).fill(0));

  useEffect(
    () => {
      setTotal(() => subTotals.reduce( (acc, item) => acc + item, 0 ));
    },
    [subTotals, setTotal]
  );  

  return (
    <div className="select">
      <div className="select-header">
        <div className="select-header__tickets-image"></div>    
        <div className="select-header__title">Покупка билета</div>
      </div>

      <div className="select-main">
        <DatePicker 
          priceInfo={priceInfo}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <div className="select-tickets">
          { ticketsData.map((data, idx) => 
              <Tickets 
                key={idx} 
                data={data} 
                selectedDate={selectedDate}
                setSubTotals={setSubTotals}
                idx={idx}
              /> 
            )
          }         
        </div>
      </div>

      <Footer 
        totalText={getFormatedPrice(total, currencySign)}
        buttonText={"Перейти к оплате"}
        stageIndex={stageIndex}
        setStageIndex={setStageIndex}     
        nextStageDisabled={!total}
      />
    </div>
  );
}

export default Select;

/*
Fonts

Roboto: (all but DayPicker's calendar)
400, 500, 700

Open Sans: (DayPicker's calendar)
400, 600

IBM Plex Sans: (DayPicker's calendar)
500
*/