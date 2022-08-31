import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './component/todotemplate'
import TodoHead from './component/todoHead';
import TodoList from './component/todoList';
import TodoCreate from './component/todoiCreate';
import { TodoProvider } from './todoContext';
//yarn add styled-components
//yarn add react-icons

const GlobalStyle = createGlobalStyle`
   body{
    background-color:#e9ecef;
   }
`;
// createGlobalStyle 특정 컴포넌트 스타일 하는게 아니고 글로버 전역스타일 추가할때 사용

function App() {
  return (
    <div>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider >
    </div>
  );
}

export default App;
