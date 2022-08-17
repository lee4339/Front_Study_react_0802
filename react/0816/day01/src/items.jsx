import React from "react";
import {Link, Route} from 'react-router-dom';
import Item from './item';

const Items = () => {
    return (
        <div>
            <h2>Items 목록</h2>
            <ul>
                <li><Link to="/items/item01">items01</Link></li>
                <li><Link to="/items/item02">items02</Link></li>
                <li><Link to="/items/item03">items03</Link></li>
                <li><Link to="/items/item04">items04</Link></li>
            </ul>
            <Route path="/items" exact render={() => <div>item을 선택하세요</div>}/>
            <Route path="/items/:itemname" component={Item} />
        </div>
    )
};

export default Items;