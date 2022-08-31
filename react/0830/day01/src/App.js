
import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './component/userlist2';
import CreateUser from './component/CreateUser';

 
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

 
const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
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
  ]
};

 
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

 
function App() {
  // const[state, setState] = usestate('초기값'); 초기값과 값편집하는 함수
  // const 함수명 = () => setState()

  const [state, dispatch] = useReducer(reducer, initialState);
  // [초기값이 저장되는 변수, 이벤트 생성하는 함수] = useReducer(reducer, 초기값)
  const nextId = useRef(6);
 
  const { users } = state;
  const { username, email } = state.inputs;

 
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({ // 해당되는 이벤트 생성
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []); // [] 배열에 값을 수정하므로 바뀌는 값도 배열형으로 전달


  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: { // 해당되는 이벤트 생성
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

 
  const onToggle = useCallback(id => {
    dispatch({ // 해당되는 이벤트 생성
      type: 'TOGGLE_USER',
      id
    });
  }, []);

 
  const onRemove = useCallback(id => {
    dispatch({ // 해당되는 이벤트 생성
      type: 'REMOVE_USER',
      id
    });
  }, []);

 
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

 
export default App;