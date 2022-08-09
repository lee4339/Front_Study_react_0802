import React from "react";

function Boxs() {
    // 내부스타일
    const style = {
        with: '100%',
        height: '150px',
        backgroundColor: 'skyblue',
        fontSize: '30px'
    }

    return (
        <div>
            <div style={style}>box</div>
        </div>
    )
};

export default Boxs;