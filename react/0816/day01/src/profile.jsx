import React from "react";

const profileData = {
    apple : {
        name: '김사과',
        description: '학생, 착해요'
    },
    banana: {
        name: '반하나',
        description: '회사원, 잘자요'
    }
};


const Profile = ({match}) => {
    // match 객체안에는 현재의 주소가 Route 컴포넌트에서 정한 규칙과 어떻게
    // 일치하는지에 대한 정보가 들어있음
    const { username } = match.params;
    const profile = profileData[username];
    return (
        <div>
            <h2>
                {username}({profile.name})
            </h2>
            <p>{profile.description}</p>
        </div>
    )
};

export default Profile;