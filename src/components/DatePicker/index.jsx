// import React, {useState, useRef, useEffect} from 'react';
import React from 'react';
import "./index.css";

// import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import DayPickerInput from "react-day-picker/DayPickerInput";

function DatePicker(props) {
  const {
    priceInfo = "Стоимость билета в праздничные дни рассчитывается по тарифу выходного дня",
  } = props;

  // const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // console.log("DayPickerInput =", DayPickerInput);

  // const hiddenInput = useRef(null);
  // console.dir("hiddenInput =", hiddenInput);

  // // HiddenInput.current.showDayPicker(); // .hideDayPicker();
  // const calendarOpener = hiddenInput.current;
  // console.dir("calendarOpener =", calendarOpener);

   // eslint-disable-next-line
  const datePickerStyles = {


  };

  // const toggleCalendar = () => {
  //   setIsCalendarOpen((prev) => !prev);
  // };

  // useEffect(
  //   () => {
  //     isCalendarOpen
  //       ? calendarOpener.showDayPicker()
  //       : calendarOpener.hideDayPicker();
  //   }, 
  //   [isCalendarOpen, calendarOpener]
  // );

  return (
    <div className="date-picker" >
      <div className="date-picker__calendar_control">
        <DayPickerInput 
            placeholder="Выберите дату" format="DD.MM.YYYY"
            // ref={hiddenInput} 
        />

        {/* <div className="date-picker__hidden_input" >
          <DayPickerInput 
            placeholder="Выберите дату" format="DD.MM.YYYY"
            ref={hiddenInput} 
          />
        </div> */}

        {/* <div className="date-picker__opener"
          onClick={toggleCalendar}
        >

          <div className="date-picker__opener-text">
            Выберите дату
          </div>

          <button className="date-picker__opener-button"></button>
          
        </div> */}


        {/* <DayPicker 
          month={new Date()}

        /> */}

      </div>
      
      <div className="date-picker__price-info">
        {priceInfo}
      </div>

    </div>
  )
}

export default DatePicker;