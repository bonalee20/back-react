import React from 'react';

const Todo = ({data}) => {
  const {task, done } = data
  return (
    <li>
      {task}
    </li>
  );
};

export default Todo;