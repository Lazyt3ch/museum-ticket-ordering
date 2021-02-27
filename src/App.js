import React, {useState, useEffect} from 'react';
import './App.css';

import SelectDateAndTickets from "./components/10-SelectDateAndTickets";
import PayForTickets from './components/20-PayForTickets';
import ShowSuccess from './components/30-ShowSuccess';

function App() {
  const stages = [
    SelectDateAndTickets, 
    PayForTickets, 
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
