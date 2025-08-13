import { useRef, useState } from "react";
import AddUlTag from "./AddUlTag";

const FoodContainer = () => {

// 화면에 보이는 체크박스 폼 완성하기
// 한글 음식 이름, 영어 음식 이름을 입력하고 추가 버튼을 누르면 값이 추가된다.
// 체크박스를 누르고 삭제 버튼을 누르면 해당 음식이 삭제된다.
// 체크박스는 여러 개 누를 수 있으며, 여러 개 누른 상품은 모두 같이 삭제 된다.

  const foodNameArr = [
    {
      korFoodName : "만두",
      enFoodName : "mandu",
      checked : false,
    },
    {
      korFoodName : "돈까스",
      enFoodName : "katsu",
      checked : false,
    },
    {
      korFoodName : "한글",
      enFoodName : "en",
      checked : false,
    },
  ]

  const [foodName, setFoodName] = useState(foodNameArr);
  const foodRef = useRef([]);

  const clickAddButton = (e) => {
    const korFoodName = foodRef.current[0].value;
    const enFoodName = foodRef.current[1].value;
    if (korFoodName !== "" && enFoodName !== "") {
      setFoodName([...foodName, {korFoodName, enFoodName, checked : false,}]);
      foodRef.current[0].value = "";
      foodRef.current[1].value = "";
    }
  };

  const clickDelButton = (e) => {
    setFoodName(foodName.filter((data)=>data.checked === false));
    console.log(foodName);
  };

  return (
    <div>
      <input type="text" placeholder = "한글 이름" ref = {(el) => foodRef.current[0] = el}/>
      <input type="text" placeholder = "영어 이름" ref = {(el) => foodRef.current[1] = el}/>
      <button type = "button" onClick={clickAddButton}>추가</button>
      <button type = "button" onClick={clickDelButton}>삭제</button>

      <AddUlTag data = {foodName}/>

    </div>
  );
};

export default FoodContainer;

// import { useRef, useState } from "react";
// import AddUlTag from "./AddUlTag";

// const FoodContainer = () => {

// // 화면에 보이는 체크박스 폼 완성하기
// // 한글 음식 이름, 영어 음식 이름을 입력하고 추가 버튼을 누르면 값이 추가된다.
// // 체크박스를 누르고 삭제 버튼을 누르면 해당 음식이 삭제된다.
// // 체크박스는 여러 개 누를 수 있으며, 여러 개 누른 상품은 모두 같이 삭제 된다.

//   const foodNameArr = [
//     {
//       korFoodName : "만두",
//       enFoodName : "mandu",
//       checked : false,
//     },
//     {
//       korFoodName : "돈까스",
//       enFoodName : "katsu",
//       checked : false,
//     },
//     {
//       korFoodName : "한글",
//       enFoodName : "en",
//       checked : false,
//     },
//   ]

//   const [foodName, setFoodName] = useState(foodNameArr);
//   const foodRef = useRef([]);

//   const clickAddButton = (e) => {
//     const korFoodName = foodRef.current[0].value;
//     const enFoodName = foodRef.current[1].value;
//     if (korFoodName !== "" && enFoodName !== "") {
//       setFoodName([...foodName, {korFoodName, enFoodName, checked : false,}]);
//       foodRef.current[0].value = "";
//       foodRef.current[1].value = "";
//     }
//   };

//   const clickDelButton = (e) => {
//     setFoodName(foodName.filter((data)=>data.checked === false));
//     console.log(foodName);
//   };

//   return (
//     <div>
//       <input type="text" placeholder = "한글 이름" ref = {(el) => foodRef.current[0] = el}/>
//       <input type="text" placeholder = "영어 이름" ref = {(el) => foodRef.current[1] = el}/>
//       <button type = "button" onClick={clickAddButton}>추가</button>
//       <button type = "button" onClick={clickDelButton}>삭제</button>

//       <AddUlTag data = {foodName}/>

//     </div>
//   );
// };

// export default FoodContainer;