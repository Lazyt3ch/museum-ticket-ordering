import React, {useState} from 'react';
// import {useState} from 'preact-compat';
import "./index.css";

// import DayPicker from 'react-day-picker'; // For development only
import 'react-day-picker/lib/style.css';
import DayPickerInput from "react-day-picker/DayPickerInput";

function DatePicker(props) {
  const {
    priceInfo, 

    selectedDate, 
    setSelectedDate,
  } = props;

  const [selectedDay, setSelectedDay] = useState(null);

  const formatDate = (dateStr) => {
    // console.log("dateStr =", dateStr);
    const date = new Date(dateStr);
    const getPadded = (num) => num.toString().padStart(2, "0");
    return `${getPadded(date.getDate())}.${getPadded(date.getMonth() + 1)}.${date.getFullYear()}`;
  }

  function CustomOverlay({ classNames, selectedDay, children, ...props }) {
    return (
      <div
        className={classNames.overlayWrapper}
        // style={{}}
        {...props}
      >
        <div className={classNames.overlay}
          style={{ 
            boxShadow: "0px 0px 15px 0px #000000 25%",
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",          
          }}        
        >
          {children}
        </div>
      </div>
    );
  }  

  const getBorderStyle = () => {
    return selectedDate
      ? "2px solid #BE005A"
      : "1px solid #AFB3BF";
  }

  const dayPickerInputStyles = {
    width: "360px",
    height: "81px",
    // padding: "24px",
    paddingLeft: "24px",
    
    // border: "1px solid #AFB3BF",
    border: getBorderStyle(),
    borderRadius: "17px",
    
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='32' viewBox='0 0 30 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.9839 1.38364L21.9855 2.57055C26.347 2.91238 29.2281 5.88439 29.2328 10.4421L29.25 23.7829C29.2562 28.7521 26.1344 31.8096 21.1304 31.8175L8.90715 31.8333C3.93439 31.8396 0.77346 28.7094 0.767206 23.726L0.750011 10.5418C0.743757 5.95402 3.52325 2.98992 7.88477 2.58954L7.88321 1.40263C7.88164 0.706316 8.39752 0.182495 9.08536 0.182495C9.7732 0.180912 10.2891 0.703151 10.2906 1.39947L10.2922 2.50725L19.578 2.49459L19.5765 1.38681C19.5749 0.690491 20.0908 0.168252 20.7786 0.16667C21.4508 0.165087 21.9823 0.687326 21.9839 1.38364ZM3.159 11.0308L26.8269 10.9992V10.4453C26.7597 7.04281 25.0526 5.2577 21.9886 4.99184L21.9901 6.21039C21.9901 6.89089 21.4602 7.43053 20.788 7.43053C20.1002 7.43212 19.5827 6.89405 19.5827 6.21356L19.5811 4.9317L10.2953 4.94436L10.2969 6.22464C10.2969 6.90671 9.78257 7.44478 9.09474 7.44478C8.4069 7.44636 7.88946 6.90988 7.88946 6.2278L7.88789 5.00924C4.83952 5.31467 3.15275 7.10611 3.15744 10.5386L3.159 11.0308ZM20.1299 18.2235V18.2409C20.1455 18.9688 20.7395 19.5211 21.4602 19.5053C22.1637 19.4879 22.7249 18.885 22.7092 18.157C22.6764 17.4607 22.1121 16.8925 21.4102 16.8941C20.6911 16.91 20.1283 17.4955 20.1299 18.2235ZM21.4211 25.3291C20.702 25.3132 20.122 24.7135 20.1205 23.9855C20.1049 23.2575 20.6817 22.6546 21.4008 22.6372H21.4164C22.1512 22.6372 22.7468 23.2369 22.7468 23.9807C22.7483 24.7245 22.1543 25.3275 21.4211 25.3291ZM13.6892 18.2488C13.7205 18.9767 14.3161 19.5449 15.0352 19.5132C15.7386 19.48 16.2998 18.8786 16.2686 18.1507C16.2514 17.4385 15.673 16.8846 14.9695 16.8862C14.2504 16.9179 13.6876 17.5208 13.6892 18.2488ZM15.0414 25.2579C14.3223 25.2895 13.7283 24.7214 13.6954 23.9934C13.6954 23.2654 14.2566 22.6641 14.9758 22.6308C15.6792 22.6293 16.2592 23.1831 16.2748 23.8937C16.3077 24.6233 15.7449 25.2246 15.0414 25.2579ZM7.24851 18.3042C7.27978 19.0321 7.87538 19.6019 8.59449 19.5686C9.29796 19.537 9.85917 18.934 9.82634 18.2061C9.81071 17.4939 9.2323 16.94 8.52727 16.9416C7.80816 16.9733 7.24695 17.5762 7.24851 18.3042ZM8.60075 25.2658C7.88165 25.299 7.2876 24.7293 7.25477 24.0013C7.25321 23.2733 7.81599 22.6704 8.53509 22.6388C9.23856 22.6372 9.81853 23.1911 9.83417 23.9032C9.867 24.6312 9.30578 25.2341 8.60075 25.2658Z' fill='%23BE005A'/%3E%3C/svg%3E%0A")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "calc(100% - 28px) center",
    outline: "none",

    fontFamily: "Roboto",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",

    cursor: "pointer",

  };

  const today = new Date();

  // const borderOnFocus = "2px solid #BE005A";

  // const handleOnFocus = () => {
  //   console.log("focus");
  //   // datePickerStyles.border = borderOnFocus;
  // }

  // const handleOnBlur = () => {
  //   console.log("blur");
  //   // datePickerStyles.border = borderOnFocus;
  // }  

  const handleDateChange = (dateStr) => {
    // console.log("date changed");
    // console.log("dateStr =", dateStr);

    if (dateStr === undefined) { // Invalid date
      setSelectedDate(null);
      // console.log("invalid date");
      return;
    }

    const date = new Date(dateStr);
    // console.log("date =", date);

    // if (date < new Date()) { // Date in the past
    //   setSelectedDate(null);
    //   // console.log("Date in the past!");
    //   return;
    // }

    setSelectedDate(date);
    // console.log("Valid date:", date);
  };

  // IMPORTANT: Start the list with Sunday
  const weekdaysLong = {
    "ru-ru": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
  };
  
  // IMPORTANT: Start the list with Sunday
  const weekdaysShort = {
    "ru-ru": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
  };

  const firstDayOfWeek = {
    "ru-ru": 1 // Week starts on Monday
  };

  const months = {
    "ru-ru": [
      "Январь", 
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Октябрь",
      "Сентябрь",
      "Ноябрь",
      "Декабрь"
    ]
  };

  const inputProps = {
    style: dayPickerInputStyles, 
    readOnly: true, 
    // onFocus: handleOnFocus,
    // onBlur: handleOnBlur,
  };

  function Navbar({ onPreviousClick, onNextClick, className, }) {
    const marginLeftRight = "16px";

    const styleLeft = {
      float: 'left',
      marginLeft: marginLeftRight,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.133 8.961L9.21313 16.0411L8.20888 17.0486L0.625 9.4615V8.45725L8.20888 0.875L9.21313 1.88087L2.133 8.961Z' fill='%23881B26'/%3E%3C/svg%3E%0A")`,
    };

    const styleRight = {
      float: 'right',
      marginRight: marginLeftRight,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.867 9.039L0.786876 1.95887L1.79113 0.951373L9.375 8.5385L9.375 9.54275L1.79112 17.125L0.786875 16.1191L7.867 9.039Z' fill='%23881B26'/%3E%3C/svg%3E%0A")`,
    };

    const styleBoth = {
      marginTop: "20px",
      height: "36px",
      width: "36px", 
      backgroundRepeat: "no-repeat",
      backgroundSize: "18px 18px",
      backgroundPosition: "center",
      // backgroundColor: "yellow", /* To be removed */
      position: "relative", /* Important: Otherwise both next-month and previous-month are unclickable! */
    };    
  
    return (
      <div className={className} >
        <div style={{...styleLeft, ...styleBoth}}
          // onClick={() => {onPreviousClick(); console.log("prev month");}}
          onClick={() => onPreviousClick()}
        >           
        </div>

        <div style={{...styleRight, ...styleBoth}} 
          // onClick={() => {onNextClick(); console.log("next month");}}
          onClick={() => onNextClick()}
        >          
        </div>
      </div>
    );
  }

  const handleDayClick = (day, {selected}) => {
    if (day < today) {
      return;
    }
    // console.log("day click");
    // console.log("day =", day);
    // console.log("selected =", selected);
    setSelectedDay(selected ? undefined : day);
  };

  return (
    <div className="date-picker" >
      <div className="date-picker__calendar_control">
        <DayPickerInput 
            placeholder="Выберите дату" 
            format="DD.MM.YYYY"
            formatDate={formatDate}
            inputProps={inputProps}
            dayPickerProps={{
              firstDayOfWeek: firstDayOfWeek['ru-ru'],
              weekdaysShort: weekdaysShort['ru-ru'],
              weekdaysLong: weekdaysLong['ru-ru'],
              months: months['ru-ru'],
              navbarElement: <Navbar />,
              showOutsideDays: true,
              disabledDays: { before: today },
              onDayClick: handleDayClick,
              selectedDays: [selectedDay],
            }}
            overlayComponent={CustomOverlay}
            onDayChange={(day) => handleDateChange(day)}            
        />
      </div>
      
      <div className="date-picker__price-info">
        {priceInfo}
      </div>

      {/* For development only */}
      {/* <DayPicker 
          firstDayOfWeek={firstDayOfWeek['ru-ru']}
          weekdaysShort={weekdaysShort['ru-ru']}
          weekdaysLong={weekdaysLong['ru-ru']}
          months={months['ru-ru']}
          navbarElement={<Navbar />}
      /> */}

    </div>
  )
}

export default DatePicker;