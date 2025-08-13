import React, { useContext, useState } from 'react';
import { FontContext } from './FontContext';


const FontSizeComponent = () => {
  const { state, actions } = useContext(FontContext)
  const { setFontSize } = actions
  const { fontSize } = state;

  
/**사용자가 글자의 크기를 입력 후 엔터를 치면 입력한 크기로 글자 크기 변경  */
  return (
    <div>
      <input type="text" onChange={(e) => setFontSize()}/>
      <p style={{fontSize}}>최하위 컴포넌트!😎</p>
      <button onClick={() => setFontSize("100px")}>커지는 버튼!</button>
    </div>
  );
};

export default FontSizeComponent;