import React from "react";

function User({user, onRemove, onToggle}) {
    return(
        <div>
            <b style={{
                cursor:'pointer',
                color: user.active ? 'deeppink' : 'black',
                }} 
                onClick={() => {onToggle(user.id)}}>
                {user.username}</b><span>{user.email}</span> &nbsp;&nbsp;
            <button onClick={() => {onRemove(user.id)}}>삭제</button>
        </div>
    )
}

function UserList2({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(user => (
                <User user = {user} key = {user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default UserList2;