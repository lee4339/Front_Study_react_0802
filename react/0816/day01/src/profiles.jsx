import React from "react";
import {Link, Route} from 'react-router-dom';
import Profile from './profile';

function Profiles() {
    return (
        <div>
            <h2>profiles</h2>
            <ul>
                <li><Link to="/profiles/apple">apple</Link></li>
                <li><Link to="/profiles/banana">banana</Link></li>
            </ul>
            <Route path="/profiles" exact render={() => <div>유저를 선택하세요</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    )
};

export default Profiles; 