import React from "react";

const itemData = {
    item01 : {
        name: '김사과',
        description: '학생, 착해요'
    },
    item02: {
        name: '반하나',
        description: '회사원, 잘자요'
    },
    item03: {
        name: '홍길동',
        description: '선생님, 잘자요'
    }
}

const Item = ({match}) => {
    const {itemname} = match.params;
    const item = itemData[itemname];

    if(!item) {
        return <div>존재하지 않는 Item입니다.</div>
    }
    return (
        <div>
            <h2>
                {itemname}({item.name})
            </h2>
            <p>{item.description}</p>
        </div>
    )
};

export default Item;