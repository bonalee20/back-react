import React from 'react';
import C from './C';
import CharContainer from './CharContainer';

const B = ({name}) => {
  return (
    <div>
      <CharContext.Consumer>
        {(context) => (
          <p style={{color:context.color}}>B의 글자</p>)}
      </CharContext.Consumer>
    </div>
  );
};

export default B;