import React from "react";
import qs from 'qs';
// yarn add qs
// * 쿼리를 문자열로 받아 처리가능하지만 객체 형태로 변환하려면
// qs 라이브러리를 사용

function About({location}) {
    // location 안에는 현재 앱이 갖고 있는 주소에 대한 정보
    // http://http://localhost:3000/about?detail=true     =>   location

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
        // 이 설정을 통해 문자열 맨 앞의 ?를 생략
        // props 전달되는 location 객체에 있는 search값에서 데이터를 읽을 수 있음
    });
    const detail = query.detail === 'true';
    // detail에게 true
    // 여기서 true는 쿼리의 파싱 결과 값은 문자열이다.
    return (
        <div>
            <h2>about</h2>
            <p>리액트 라우터를 공부하고 있어요</p>
            {detail && <p>추가적인 내용이 보일거예요</p>}
        </div>
        // http://http://localhost:3000/about?detail=true
    )
};

export default About; 