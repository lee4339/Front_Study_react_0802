import React from "react";
import styled, { css } from "styled-components";
//yarn add stuled-components

// const 컴포넌트명 = styled.태그명``
const HeaderBox = styled.div`
    width:100%;
    height:150px;
    background:#ccc;
`

const Title = styled.h2`
    font-size:50px;
`

const InputBox = styled.input`
    width:300px;
    height:30px;
    background-color:#f1f1f1;
    border:1px solid #ccc;
`

const Btn = styled.button`
    border:1px solid #ccc;
    border-radius:5px;
    padding:5px 15px;
`

const Circle = styled.div`
    // margin: 50px;
    width:5rem;
    height:5rem;
    background:${props => props.color || 'black'};
    border-radius:50%;
    transition: all 0.5s;

    // css를 적용하는 props
    ${props => props.big && css`width:10rem; height:10rem`}

    // &은 현재 컴포넌트
    &:hover{
        background-color: violet;
    }
    &:active{
        background-color: red;
    }

    & + & {
        margin-bottom:1rem;
    }
`




function Test01() {
    return ( 
        <div>
            <HeaderBox>
                <Title>header</Title>
                <InputBox/>
                <Btn>button</Btn>
            </HeaderBox>
            Test01
            {/* props를 활용 */}
            <Circle/>
            <Circle color="deeppink"/>
            <Circle color="deeppink" big/>
        </div>
    )
};

export default Test01;