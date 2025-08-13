// react 공부
// state > sound 확인 target = e.target.innerText
// state > 
import React, { useState } from 'react';

const Practice = () => {
  const [sound, setSound] = useState("")
  const onClickToSound = (e) =>{
    console.log(e.target.innerText)
    const target = e.target.innerText
    if(target === "고양이 버튼"){
      setSound("meow")
    }else if (target === "강아지 버튼"){
      setSound("멍")
    }else if (target === "이태희 버튼"){
      setSound("...")
    }
  }

  return (
    <div>
      {sound}
      <div>
        <button onClick={onClickToSound}>고양이 버튼</button>
        <button onClick={onClickToSound}>강아지 버튼</button>
        <button onClick={onClickToSound}>이태희 버튼</button>
      </div>
    </div>
  );
};

export default Practice;


