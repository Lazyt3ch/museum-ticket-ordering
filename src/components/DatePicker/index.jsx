import React from 'react';
import "./index.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function DatePicker(props) {
  const {
    priceInfo = "Стоимость билета в праздничные дни рассчитывается по тарифу выходного дня",
  } = props;

  const datePickerStyles = {


  }

  return (
    <div className="date-picker">
      <div className="date-picker__calendar_control">
        <div className="date-picker__opener">
          <div className="date-picker__opener-text">
            Выберите дату
          </div>
          <button className="date-picker__opener-button"
                        
          >
            
          </button>
        </div>
        <DayPicker 
          month={new Date()}

        />
      </div>
      
      <div className="date-picker__price-info">
        {priceInfo}
      </div>

    </div>
  )
}

export default DatePicker;