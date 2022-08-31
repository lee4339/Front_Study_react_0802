import React, { useReducer, useState } from 'react'; // 리액트 패키지에서 useState라는 hooks를 불러옴

// 리덕스함수
function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1 ;
        case 'DECREMENT': 
            return state - 1;
        default: 
            return state;
    }

}

function Counter() {

    const [number, dispatch] = useReducer(reducer, 0);
    // reducer안에서 dispatch는 이벤트를 발생
    // 첫번째는 reducer, 두번째 초기 상태

    const plus = () => {
        dispatch({type: 'INCREMENT'}) // 원하는 기능의ㅣ 이벤트 호출
    }

    const minus = () => {
        dispatch({type:'DECREMENT'}) //     

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={plus}>더하기</button>
            <button onClick={minus}>빼기</button>
        </div>
    );
}
}

export default Counter;