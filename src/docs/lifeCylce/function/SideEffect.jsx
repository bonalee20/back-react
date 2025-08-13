import React, { useEffect, useState } from 'react';

const SideEffect = () => {
  const [color,setColor]= useState(0)
  const [number, setNumber] = useState(0)

  const getRandomColor = () => '#' + Math.floor(Math.random() * 12222).toString(16)

  const onClickToChangeColor = () =>{
    setColor(getRandomColor())
  }

  const increaseNum = () => setNumber(number +1)
  
  useEffect(() =>{
    console.log("useEffect 내부 리랜더링")
  },[number]) 
  // 숫자만 바꿔야지 리랜더링 된다 (목적에서만 사용)


  console.log("리랜더링")


  return (
    <div>
      <h1 style={{color}}>오늘 금요일 놀러간다.</h1>
      <h1>{number}</h1>
      <button onClick={onClickToChangeColor}>색상 변경</button>
      <button onClick={increaseNum}>+1</button>
    </div>
  );
};

export default SideEffect;