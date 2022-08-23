import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import TodoHead from './component/todoHead';
import TodoList from './component/todoList';
import TodoTemplate from './component/todoTemplate';

// yarn add styled-components
// yarn add react-icons


const GlobalStyle = createGlobalStyle`
  body {
    background-color:#e9ecef;
  }
`;
// createGlobalStyle 특정 컴포넌트 스타일 하는게 아니고 글로벌 전역스타일 추가할 때 사용

function App() {
  return (
    <div>
      <GlobalStyle/>
      <TodoTemplate>
      <TodoHead/>
      <TodoList/>
        {/* 
        <TodoCreate/> 
        */}
      </TodoTemplate>
    </div>
  );
}

export default App;
