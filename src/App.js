import React, {useState} from 'react';
import './App.css';

import DateAndTickets from "./components/10-DateAndTickets";
import Payment from './components/20-Payment';
import Success from './components/30-Success';

function App() {
  const stages = [
    DateAndTickets, 
    Payment, 
    Success,
  ];

  const [total, setTotal] = useState(0);
  const [currencySign, setCurrencySign] = useState("");


  // eslint-disable-next-line
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


  const CurrentStage = stages[stageIndex];

  return (
    <div className="app">
      { (stageIndex < stages.length - 1) && 
        (<div className="app__main-logo">
          
        </div>)     
      }

      <CurrentStage 
        stageIndex={stageIndex}
        setStageIndex={setStageIndex}
        termsAccepted={termsAccepted}
        setTermsAccepted={setTermsAccepted}
        total={total}
        setTotal={setTotal}
        currencySign={currencySign}
        setCurrencySign={setCurrencySign}
        email={email}
        setEmail={setEmail}
      />
  
    </div>
  );
}

export default App;
