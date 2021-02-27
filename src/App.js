import React, {useState} from 'react';
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

  const CurrentStage = stages[stageIndex];

  return (
    <div className="App">
      <CurrentStage />
  
    </div>
  );
}

export default App;
