import React, {useState} from 'react';

const Count = () => {
  const [number, setNumber] = useState(0)

  console.log("number", number)
  console.log("setnumber", setNumber)

  const increase = (e) => {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>1 감소</button>
    </div>
  );
};

export default Count;

//===========================================================
//import React, {useState} from 'react';

//const Count = () => {
  //const [number, setNumber] = useState(0)

  //const increase = (e) => {
  //  setNumber(number + 10)
  //}

  //return (
  //  <div>
  //    <h1>{number}</h1>
  //    <button onClick={increase}>+1 증가</button>
  //  </div>
  //);
//};

//export default Count;

import React, { useState } from 'react';
// result 는 사용자가 입력한 결과
const Colors = () => {
  const [color,setColor] = useState("")
  

  const onClickToColor = (e) =>
    const target = e.target.innerText
    if (target === "빨간색 버튼"){
      setColor("red")
    }else {
      setColor("blue")
    }
  }

  return (
    <div>
      <p>{result}</p>
      <button onClick={onClickToColor}>빨간색 버튼</button>
      <button onClick={onClickToColor}>파란색 버튼</button>
    </div>
  );

};

export default Colors;