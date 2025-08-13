import React from 'react';
import PassComponent from './PassComponent';
import NotpassComponent from './NotpassComponent';


const Jsx05 = () => {
  const age = 22
  const isAdult = age > 19
  const isEven = age%2 ===0

  const lucky = <p> 당첨 </p>
  const unlucky = <p> 꽝</p>

  const enter = isAdult ? <PassComponent />: <NotpassComponent/>
  const win = isEven ? lucky : unlucky

  return (
    <div>
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;