import React from "react";
import { useState } from "react";

function Counter() {
    // 초기값 설정 
    //const [초기값저장명, 초기값변환하는함수명] = 초기값 설정;
    const [number, setNumber] = useState(0);

    const plus = () => {
        setNumber(number + 1);
        console.log('1을 더했습니다.');
    }

    const minus = () => {
        setNumber(number - 1)
        console.log('1을 뺐습니다.');
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={plus}>더하기</button>
            <button onClick={minus}>빼기</button>
        </div>
    )
};

export default Counter;