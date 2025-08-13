import React from 'react';
import { useParams } from 'react-router-dom';

const HobbyContainer = () => {
  console.log(useParams())
  // url parameter : url 에 parameter 심어서 전송하는 방법
  return (
    <div>
      1. 마라탕
    </div>
  );
};

export default HobbyContainer;