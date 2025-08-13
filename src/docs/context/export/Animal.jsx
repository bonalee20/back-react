// Animal.jsx

import { useContext } from "react";
import { AnimalsContext, AnimalsProvider } from "./AnimalsContext";
import S from "./AnimalsContext";

const Animal = () => {
  const {state, actions} = useContext(AnimalsContext);
  const {remove} = actions;
  const animal = state;

  const removeButton = (e) => {
    remove(e.target.innerText);
  }

  return (
    <div>
      <AnimalsProvider>
        <S.Button onClick={removeButton}>
          야옹이
        </S.Button>
      </AnimalsProvider>
    </div>
  );
};

export default Animal;