import React,{ useState, useEffect } from "react";

import "./index.css";

function App() {
  const colors= ['red', 'blue', 'green', 'yellow', 'purple', 'black', 'salmon'];
  const [position, setPosition] = useState(0);
  let carousel = document.querySelector(".carousel");

  const next = () => {
    console.log('next')
    if (position <= 1) {
      setPosition(position + 1)
      carousel.style.transition = 'all 0.75s ease-in-out';
    }
  }

  const preview = () => {
    console.log('preview')
    if(position >= 1){
      setPosition(position - 1)
    }
  }

  console.log("position", position)
  return (
    <div>
      <div className='carousel'>
        <div className={`box ${colors[position]}`}></div>
        <div className={`box ${colors[position + 1]}`}></div>
        <div className={`box ${colors[position + 2]}`}></div>
        <div className={`box ${colors[position + 3]}`}></div>
        <div className={`box ${colors[position + 4]}`}></div>
      </div>
      <div className='carousel-control-wrapper'>
        <button onClick={preview} className='carousel-control'>{'<'}</button>
        <button onClick={next} className='carousel-control'>{'>'}</button>
      </div>
    </div>
  );
}

export default App;
