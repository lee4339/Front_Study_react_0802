import React from "react";
import styles from "./test02.module.css"
//import { AiFillAndroid } from "react-icons/ai";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";


function Test02({children, checked, ...rest}) {
    return ( 
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" checked={checked}{...rest}/>
                {/* 
                    checked = {checked}에서 checked는 체크에 대한 true 또는 false 설정하여 
                    icon에 있는 조건부렌더링에 값을 전달하여 아이콘을 보임을 설정
                 */}
                <div className={styles.icon}>{checked? (<MdCheckBox className={styles.checked}/>) : (<MdCheckBoxOutlineBlank className={styles.checked}/>)}</div>
            </label>
            <span>{children}</span>
            {/* <h2>Test02</h2>
            <AiFillAndroid style={{fontSize:'100px'}}/> */}
        </div>
    )
};

export default Test02;