import React, {useState, useEffect} from "react";
import axios from "axios";

// axios 모듈
// GET, PUT, POST, DELETE 등의 메소드로 API 요청을 합니다
// 설치 : yarn add axios
// import axios from 'axios';
// axios.get('/users/1');

// function getUsers() {
//     const response = axios.get('https://jsonplaceholder.typicode.com/users');
// }

function Users() {
    // 1. 요청 결과
    const [users, setUsers] = useState(null);
    // 2. 로딩 상태
    const [loading, setLoading] = useState(false);
    // 3. 에러 
    const [error, setError] = useState(null);

    
        const fetchUsers = async () => {
            try {
                // 요청이 시작할때 Error, Users 초기화
                setUsers(null);
                setError(null);
                // Loading 상태로 설정
                setLoading(true);
                // api 연결 axios.get('api 주소');
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        }
    useEffect(() => {
        fetchUsers(); // 함수호출
    }, []);
    
    // 상태값에 따라서 화면에 출력하기 위한 제어문
    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!users) return null;

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li>
                        {user.username}({user.name});
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시불러오기</button>
            {/* 다시불러오기 버튼 */}
        </div>
    )
}

export default Users;