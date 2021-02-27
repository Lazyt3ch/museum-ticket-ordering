import React from 'react';
import "./index.css";

function DatePicker(props) {
  const {
    priceInfo = "Стоимость билета в праздничные дни рассчитывается по тарифу выходного дня",
  } = props;

  return (
    <div className="date-picker">
      SelectDate
      <div className="date-picker__calendar_control">
        SelectDate
      </div>
      
      <div className="date-picker__price-info">
        {priceInfo}
      </div>

    </div>
  )
}

export default DatePicker;