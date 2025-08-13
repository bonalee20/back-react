import React, { useRef } from 'react';


const FormConfirm = () => {

  const inputRef = useRef ([])
  const formRef = useRef({})
  const onClickSumbit = () => {
    console.log(inputRef.current)
    //for(let input of inputRef.current)
    console.log(inputRef.current.forEach((input) => {
      if(!input.value){
        return alert(`${input.name} 값을 입력하세요`)
      }
    }
  ))


  formRef.current.submit()
  }

  // input 은 객체로 보기 input을 순차적( 아이디와 비밀번호의 존재 여뷰)
  // 모든 dom은 객체로 봐라 ( 크롬에서 객체처럼{} 안 나올 수 있음 )



  return (
    <div>
      <form ref = {formRef}>
        <div>
          <span>아이디</span>
          <input ref={(el) => inputRef.current[0] = el} type="text" name ="id" /></div>
        <div>
          <span>비밀번호</span>
          <input ref={(el) => inputRef.current[1] = el} type="password" name ="password" /></div>
        <button onClick={onClickSumbit} type='button'>전송</button>
      </form>
    </div>
  );
};

export default FormConfirm;




//===============================
// import React, { useRef } from 'react';

// const FormConfirm = () => {

//   const inputRef = useRef([]);
//   const formRef = useRef({})
//   const onClickSubmit = () => {
//     console.log(inputRef.current)

//     for(let input of inputRef.current){
//       if(!input.value){
//         alert(`${input.name}의 값을 입력하세요`)
//         return
//       }
//     }

//     formRef.current.submit()
//   }

//   return (
//     <div>
//       <form ref={formRef}>
//         <div>
//           <span>아이디</span>
//           <input ref={(el) => inputRef.current[0] = el} type="text" name="id" /></div>
//         <div>
//           <span>비밀번호</span>
//           <input ref={(el) => inputRef.current[1] = el} type="password" name="password" /></div>
//         <button onClick={onClickSubmit} type='button'>전송</button>
//       </form>
//     </div>
//   );
// };

// export default FormConfirm;