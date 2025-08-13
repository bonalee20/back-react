import React, { useState } from 'react';

const Count02 = () => {
  const [number, setNumber] = useState(0)
  
  const increase = (e) => {
    setNumber(number - 1)
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}> 1 감소 </button>
    </div>
  );
};

export default Count02;