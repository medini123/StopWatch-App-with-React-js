import React, { useState } from "react";
import DisplayComponent from "./components/DisplayComponent";
import BtnComponent from "./components/BtnComponent";
import "./App.css";



const App = () => {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  var updatedH = time.h, updatedM = time.m, updatedS= time.s, updatedMs = time.ms;

  const start = () => {
       run();
       setStatus(1);
       setInterv(setInterval(run, 10));
  }

  const run = () =>{
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    };

    if(updatedS === 60 ){
      updatedM++;
      updatedS = 0;
    };

    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }

    updatedMs++;
    return setTime({ms: updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }

  const stop = () =>{
       clearInterval(interv);
       setStatus(2);
  }

  const reset = () =>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});

  };

  const resume = () => start();

  
  return (
    <div className="main-section">
         
         <div className="clock-holder">
               <div className="stopwatch">
                     <DisplayComponent  time={time}/>
                     <BtnComponent start={start} stop={stop} status={status} reset={reset} resume={resume}/>
               </div>
         </div>

    </div>
  );
};

export default App;



