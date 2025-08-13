import React, { useEffect, useState } from 'react';
// 메모리 누수 = 돈 나간다
const SideEffectMount = () => {
  console.log('최초 마운트!😎')

  const [users, setUsers] = useState([])
  
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const users = await response.json()
      setUsers(users)
    }
    getUsers()
  }, [])
    // 위의 빈배열에 넣어야함
  const userList = users.map(({name}, i) => <p key={i}>{name}</p>)

  return (
    <div>
      {userList}
    </div>
  );
};

export default SideEffectMount;