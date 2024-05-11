import React from "react";




const DisplayComponent = (props) => {
  return (
    <div >
         
        <span>{(props.time.h < 10) ? "0" + props.time.h : props.time.h}</span>&nbsp;:&nbsp;
        <span>{(props.time.m < 10) ? "0" + props.time.m : props.time.m}</span>&nbsp;:&nbsp;
        <span>{(props.time.s < 10) ? "0" + props.time.s : props.time.s}</span>&nbsp;:&nbsp;
        <span>{(props.time.ms < 10) ? "0" + props.time.ms : props.time.ms}</span>&nbsp;:&nbsp;
        
    </div>
  );
};

export default DisplayComponent;