import React, { useReducer, useRef, useContext, createContext } from "react";

//업데이트가 되는 컴포넌트
const initialTodos = [
    {
        id: 1,
        text: '프론트엔드 프로젝트 만들기',
        done: false
    },
    {
        id: 2,
        text: '밥 잘 챙겨먹기',
        done: true
    },
    {
        id: 3,
        text: '운동하기',
        done: false
    },
    {
        id: 4,
        text: '일기쓰기',
        done: false
    }
];


//컴포넌트에 상태를 관리하는 함수
function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);

        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo);

        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);

        default:
            throw new Error(`${action.type}이 잘못 전달됨`);
    }
}


//아래 3개의 컴포넌트들 각각에 오류가 발생해서 오류에 대한 설정하기 위한 함수

//상태값의 범위를 설정함 컴포넌트
const TodoStateContext = createContext();
//업데이트가 발생하는 컴포넌트를 설정하는 컴포넌트
const TodoDispatchContext = createContext();
//업데이트가 발생하는 컴포넌트 중에 객체 추가를 설정하는 컴포넌트
const TodoNextIdContext = createContext();


export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);

    const nextId = useRef(5);//추가될 객체 인데스값

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}


//커스텀 HOOK에서 에러 처리
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}



