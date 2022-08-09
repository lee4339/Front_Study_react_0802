import React from "react";

// function Test({name, color, color01}){
// 컴포넌트 리턴할때 선언된 각각 속성을 전달하고 받는 과정
// function Test(props) {
//    return (
//        <div>
//            <h1 style={{color : props.color01}}>내가 좋아하는 것은 {props.color} {props.name}</h1>
//       </div>
//    )
// };
function Hello(props) { //{color, name, isSpecial}
    return(
        <div style={{color : props.color}}>  {/*props로 스타일 적용*/}
        {/* <div style={{ color }}></div> 단순하게 속성으로 스타일적용*/}
            <h1>hello</h1>
            {/*
                [조건부 랜더링]
                조건식 ? 참일때 실행문 : 거짓일때 실행문
                조건식 && 참일때만 실행
            */}

            {/*{isSpecial ? <b>☆☆☆</b> : null} 안녕하세요 {name}*/}
            {props.isSpecial && <b>☆☆☆</b>} 안녕하세요 {props.name}

             {/*
             hello
             <Test name='apple' color='빨간색' color01='red'/>
            <Test name='banana' color='노란색' color01='yellow'/>
            <Test/>
            <Test/>
            <Test/> 
            */}
        </div>
    )
};

export default Hello;