import React, {useRef, useState} from 'react';
import './App.css';
import UserList2 from './component/userList2';
// import UserList from './component/userList';
// import Input from './component/input';
// import Counter from './component/counter';
import CreateUser from './component/createUser'

// 상태관리


function App() {

  // CreateUser input 태그의 초기값 설정
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs; //포함하고 의미선언
  const onChange = (e) => {
    const {name, value} = e.target
    setInputs({ 
      ...inputs,
      [name]:value

    })
    //console.log(name)
  };


  
  const [users, setUsers] = useState([
    {
        id: 1,
        username: '김사과',
        email: 'apple@apple.com',
        active: true
    },
    {
        id: 2,
        username: '오렌지',
        email: 'orange@orange.com',
        active: false
    },
    {
        id: 3,
        username: '반하나',
        email: 'banana@banana.com',
        active: false
    },
    {
        id: 4,
        username: '이메론',
        email: 'melon@melon.com',
        active: false
    },
    {
        id: 5,
        username: '배애리',
        email: 'berry@berry.com',
        active: false
    }
  ]);

  const nextId = useRef(6);
  const onCreate = () => {
    const user = {
      id: nextId.current,   //현재 커런트
      username,
      email
    }
    setUsers(users.concat(user))
    setInputs({
      username: '',
      email:''
    });
    nextId.current += 1;
  }

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id))
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  }

  const onToggle = (id) => {
    setUsers(users.map(user => user.id === id ? {...user, active : !user.active} : user));    
  }


  return (
    <div>
      {/* <Counter/> */}
      {/* <Input/> */}
      {/* <UserList/> */}

      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList2 users = {users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
