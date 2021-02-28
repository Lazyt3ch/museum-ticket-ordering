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

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const getPadded = (num) => num.toString().padStart(2, "0");
    return `${getPadded(date.getDate())}.${getPadded(date.getMonth() + 1)}.${date.getFullYear()}`;
  }


  function CustomOverlay({ classNames, selectedDay, children, ...props }) {
    return (
      <div
        className={classNames.overlayWrapper}
        style={{ marginLeft: -100 }}
        {...props}
      >
        <div className={classNames.overlay}>
          <h3>Hello day picker!</h3>
          <p>
            <input />
            <button onClick={() => console.log('clicked!')}>button</button>
          </p>
          <p>
            {selectedDay
              ? `You picked: ${selectedDay.toLocaleDateString()}`
              : 'Please pick a day'}
          </p>
          {children}
        </div>
      </div>
    );
  }  

  

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
            placeholder="Выберите дату" 
            format="DD.MM.YYYY"
            formatDate={formatDate}
            // overlayComponent={CustomOverlay}
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