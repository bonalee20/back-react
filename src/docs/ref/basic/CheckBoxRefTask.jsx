//ref 이용하여 체크박스를 선택한 언어르 화면에 출력
// 체크박스 해제 언어 사라짐
import React, { useRef, useState } from 'react';

const CheckBoxRefTask = () => {

  const [result,setResult] = useState("")
  const inputRef = useRef([])

  const onChangeTo=() => {
    console.log(inputRef.current)

    inputRef.current.forEach((input)=>{
      if(input.checked){
        setResult(input.value)
        console.log(input.value)
      }
    })
  }

  return (
    <div>
      <p>{result}</p>
        <label>
          <span>JAVA</span>
          <input type="checkbox" name="language" ref = {(el) => inputRef.current[0] =el} onChange={onChangeTo}/>
        </label>
        <label>
          <span>Python</span>
          <input type="checkbox" name="language" ref = {(el) => inputRef.current[1] =el} onChange={onChangeTo} />
        </label>
        <label>
          <span>JS</span>
          <input  type="checkbox" name="language" ref = {(el) => inputRef.current[2] =el} onChange={onChangeTo} />
        </label>
    </div>
  );
};

export default CheckBoxRefTask;


//===================================================================================================================
// import React, { useRef, useState } from 'react';

// const CheckBoxRefTask = () => {
//   // ref를 이용하여, checkbox를 선택한 언어를 화면에 출력하기
//   // checkbox가 선택 해제되면 언어도 사라진다.
  
//   const checkboxRef = useRef([])
//   const [language, setLanguage] = useState("") 

//   const addLanguage = (e, index) => {
//     let value = checkboxRef.current[index].value;
//     let isLast = checkboxRef.current.length - 1 == index
    
//     if(e.target.checked){
//       setLanguage(isLast ? language + value : language + value + ", ")
//     }else {
//       setLanguage(isLast ? language.replaceAll(value, "") : language.replaceAll(value + ", ", ""))
//     }
//   }

//   return (
//     <div>
//       <h1>{language}</h1>
//       <label>
//         <input 
//           type="checkbox" 
//           name="language" 
//           ref={(el) => checkboxRef.current[0] = el} onChange={(e) => addLanguage(e, 0)} value={"JAVA"} />
//         <span>JAVA</span></label>
//       <label>
//         <input 
//           type="checkbox" 
//           name="language" 
//           ref={(el) => checkboxRef.current[1] = el} onChange={(e) => addLanguage(e, 1)} value={"Python"} />
//         <span>Python</span></label>
//       <label>
//         <input 
//           type="checkbox" 
//           name="language" 
//           ref={(el) => checkboxRef.current[2] = el} onChange={(e) => addLanguage(e, 2)} value={"JS"} />
//         <span>JS</span></label>
//     </div>
//   );
// };

// export default CheckBoxRefTask;