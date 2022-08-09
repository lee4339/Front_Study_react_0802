import React from "react";
import { useState } from "react";

function Input() {
    const [text, setText] = useState("")
    const onChange = (e) => {
        setText(e.target.value);

    }

    const onreset = () => {
        setText('')
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onreset}>지우기</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
};

export default Input;