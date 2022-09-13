import React from 'react'
import './App.css';
import styles from './component/header.module.css'

//import { 속성 } from '패키지';
import { Route, Link } from 'react-router-dom';
import MainPage from './main';
import Sale from './sale';
import Ranking from './ranking';
import Brand from './brand';
import EventP from './event';
import Product from './product';
import Coupon from './coupon';

function App() {
  // 
  return (
    <>
      <div className="header">
        <div className={styles.headerIn}>
          <h1 className={styles.logo}><img /></h1>
          <nav className={styles.menu}>
            <ul>
              <li><Link to="/">첫페이지</Link></li>
              <li><Link to="/sale">특가존</Link></li>
              <li><Link to="/ranking">랭킹</Link></li>
              <li><Link to="/brand">브랜드</Link></li>
              <li><Link to="/event">이벤트</Link></li>
              <li><Link to="/product">제품</Link></li>
              <li><Link to="/coupon">쿠폰/혜택</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        {/* <Route path='컴포넌트파일경로' component={컴포넌트명}/> */}
        <Route path='/' exact={true} component={MainPage} />
        <Route path='/sale' component={Sale} />
        <Route path='/ranking' component={Ranking} />
        <Route path='/brand' component={Brand} />
        <Route path='/event' component={EventP} />
        <Route path='/product' component={Product} />
        <Route path='/coupon' component={Coupon} />
      </div>

      {/* <Header />
      <MainImg />
      <Contents />
      <Footer /> */}
      {/* 이미지태그에 이미지연결 하기
        <img src={Product02} alt='' />
        <img src={require('./images/product2.png')} alt='' /> 
      */}
      {/* 
          <> </>와 <div></div> 같은기능 단 차이점이
          div는 스타일 적용할 수 있고 <> 단순 그룹기능 
        */}
      {/* 링크걸기 A태그 대체 Link사용 */}
    </>
  );
}

export default App;
