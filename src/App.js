import React, {useState} from 'react';
import './App.css';

import DateAndTickets from "./components/10-DateAndTickets";
import Payment from './components/20-Payment';
import ShowSuccess from './components/30-Success';

function App() {
  const stages = [
    DateAndTickets, 
    Payment, 
    ShowSuccess,
  ];


  // eslint-disable-next-line
  const [stageIndex, setStageIndex] = useState(0);

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
      <CurrentStage />
  
    </div>
  );
}

export default App;
