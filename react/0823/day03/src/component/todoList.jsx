import React from "react";
import styled from "styled-components";
import TodoItem from "./todoItem";

const TodoListBlock = styled.div`
    padding: 20px 30px;
    padding-bottom: 50px;
    overflow-y: auto;
`;

function TodoList() {

    return (
        <TodoListBlock>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </TodoListBlock>
    );
}

export default TodoList;