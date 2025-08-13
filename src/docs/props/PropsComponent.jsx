import React from 'react';

const PropsComponent = (props) => {
  console.log(props)
  return (
    <div>
      {props.name}
      {props.age}
    </div>
  );
};

export default PropsComponent;