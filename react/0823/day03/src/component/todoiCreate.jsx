import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../todoContext';


const CircleButton = styled.button`
    background-color:#38d9a9;
    &:hover{
        background-color: #63e6be;
    }
    &:active{
        background-color: #20c997;
    }

    z-index:5;
    cursor:pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    jusify-content: center;
    font-size: 60px;

    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%); 
    //position의 기준쪽이기 때문에 한쪽 더 이동한 거리를 조절하기위해
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    transition: 0.2s all ease-in;

    ${props => props.open && css`
       background-color: #ff6b6b;
        &:hover{
         background: #ff8787;
        }
        &:active{
         background: #ff8787;
        }  
       transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    width:100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;
const InsertForm = styled.form`
    background: #f8f9fa;
    padding: 32px 32px 72px 32px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();


    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();//새로고침X

        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        })

        setValue('')
        setOpen(false);
        nextId.current += 1;
    }

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input placeholder="할 일을 입력 후, Enter를 누르세요"
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    )
}

export default TodoCreate;