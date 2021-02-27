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

  const [stageIndex, setStageIndex] = useState(0);

  return (
    <div className="App">
      < {stages[stageIndex]} />
  
    </div>
  );
}

export default App;
