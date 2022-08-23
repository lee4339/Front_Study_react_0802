import React from "react";
import styled from "styled-components";

const TodoItemBlock = styled.div`
    display:flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
`;

function TodoItem() {

    return (
        <TodoItemBlock>
            {/* <CheckCircle></CheckCircle>
            <Text></Text>
            <Remove></Remove> */}
        </TodoItemBlock>
    );
}

export default TodoItem;