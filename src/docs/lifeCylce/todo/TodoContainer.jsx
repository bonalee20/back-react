import React, { useEffect, useState } from 'react';
import getTodos from './getTodo';
import Todo from './Todo';
import TodoInsert from './TodoInsert';


const TodoContainer = () => {
  const [todos, setTodos] = useState([])
  const [handlesTodos, setHandelTodos] = useState(false)

  useEffect(() =>{
    getTodos("http://localhost:4000/todo")
      .then(setTodos)
      .catch(console.error)
  }, [handlesTodos])

  console.log(todos)
  const todoList = todos.map((todo, i) => <Todo key={i} todo={todo} /> )

  return (
    <div>
      <TodoInsert todos={todos} handlesTodos={handlesTodos} setHandelTodos={setHandelTodos} />
      <h1>남은 할 일의 개수 {todos.length && todoList.length}</h1>
      <ul>{todoList}</ul>
    </div>
  );
};

export default TodoContainer;


/////==================
import React, { useState } from 'react';
//const fetchTodo = async (url, options) => {
//const response = await fetch(url, options)
//return response;
//}

//export default fetchTodo;
const TodoInsert = ({todos, handleTodos, setHandleTodos}) => {
  const [value, setValue] = useState("")
  const onChangeValue = (e) => {
    setValue(e.target.value)
  }
  const backEndUrl = 'http://localhost:4000/todos'
  const insertTodo = async (e) => {
    if(e.key === 'Enter'){

      if(!window.confirm(`이대로 추가하시겠습니까?`)) return;
      await fetch(backEndUrl, {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          id : (todos.length + 1).toString(),
          title : value,
          isChecked : false
        })
      })
      .then((res) => {
        if(!res.ok) return alert("알 수 없는 오류가 발생했습니다.");
        alert("할 일 추가가 완료 되었습니다.😁")
        setHandleTodos(!handleTodos)
      })
      .catch(console.error)
    }
  }

  return (
    <div>
      <input type="text" 
        onChange={onChangeValue} 
        onKeyDown={insertTodo}
        placeholder='오늘 할 일을 추가해 볼까요?' 
      />
    </div>
  );
};

export default TodoInsert;