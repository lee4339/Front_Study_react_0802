import React, {useState} from 'react';
import './App.css';
// import styles from './App.module.css';
// import Test01 from './test01.jsx';
import Test02 from './test02.jsx';


function App() {
  const [check, setCheck] = useState(false);  // 초기값 설정

  const onChange = e => {
    setCheck(e.target.checked); // 현재 이벤트가 발생하는 타겟(Test02 컴포넌트) 
  };

  return (
    <div>
      {/* <h2 className="title">서브제목입니다</h2>
      <h2 className="title2">서브제목2입니다</h2>
      <h2 className={styles.title2}>서브제목20000입니다</h2>
      <h2 className='title2'>서브제목3입니다</h2>
      <h2 className={{background:'blue', color: '#000'}}>서브제목3입니다</h2> */}
      {/* <Test01/> */}
      {/* Test02 컴포넌트를 클릭 */}
      <Test02 onChange={onChange} checked={check}>약관에 모두 동의</Test02>
      <p>
                       {/* onChange함수에 의해서 checked 속성을 실행(check 조건부 함수실행)  */}
        <b>check : </b>{check ? 'true' : 'false'} 
      </p>
    </div>
  );
}

export default App;
