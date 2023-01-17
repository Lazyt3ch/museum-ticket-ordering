import React, {useState} from 'react';
// import {useState} from 'preact-compat';
import './App.css';

import Select from "./components/10-Select";
import Payment from './components/20-Payment';
import Success from './components/30-Success';

function App() {
  const [total, setTotal] = useState(0);
  const [currencySign, setCurrencySign] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);

  const [stageIndex, setStageIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);


  // /* Test components 20 and 30 */
  // useEffect( () => {
  //   for (let i = 0; i < 3; i++) {
  //     setTimeout(() => {
  //       setStageIndex((prev) => prev < 2 ? prev + 1 : 0);
  //     }, 2000 * (i + 1) );
  //   }
  // }, 
  // []);

  return (
    <div className="app">
      { (stageIndex < 2) && 
        <div className="app__main-logo"></div>
      }

      { stageIndex === 0
          ? <Select 
              stageIndex={stageIndex}
              setStageIndex={setStageIndex}
              total={total}
              setTotal={setTotal}
              currencySign={currencySign}
              setCurrencySign={setCurrencySign}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          : stageIndex === 1
            ? <Payment 
                stageIndex={stageIndex}
                setStageIndex={setStageIndex}
                termsAccepted={termsAccepted}
                setTermsAccepted={setTermsAccepted}
                total={total}
                currencySign={currencySign}
                email={email}
                setEmail={setEmail}
              />
            : stageIndex === 2
              ? <Success 
                  total={total}
                  currencySign={currencySign}
                  selectedDate={selectedDate}
                />
              : null
      } 
    </div>
  );
}

export default App;
