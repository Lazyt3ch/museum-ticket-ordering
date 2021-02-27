import React, {useState} from 'react';
import './App.css';

import SelectDateAndTickets from "./components/10-SelectDateAndTickets";

function App() {
  const stages = [
    SelectDateAndTickets, // Select Date and Tickets
    'Pay',
    'Success'
  ];

  const [stageIndex, setStageIndex] = useState(0);

  return (
    <div className="App">
      { stageIndex
        

      }
  
    </div>
  );
}

export default App;
