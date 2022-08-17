import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Profiles from './profiles';
import HistorySam from './history';
import Items from './items';

function App() {
  return (
    <div>
      {/* <Link to='파일주소'>문자</Link>
      <Route path="파일주소" component={보여줄 컴포넌트}/> */}
      <div>
        <ul>
          <li><Link to="/home">홈</Link></li>
          <li><Link to="/about">소개</Link></li>
          <li><Link to="/profiles">프로필 목록</Link></li>
          <li><Link to="/history">history 예제</Link></li>
          <li><Link to="/items">items 목록</Link></li>
        </ul>
        <hr />
        <div>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/profiles" component={Profiles}/>
          <Route path="/history" component={HistorySam}/>
          <Route path="/items" component={Items}/>
        </div>
      </div>
    </div>
  );
}

export default App;
