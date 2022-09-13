import React from "react";
import styles from './thema01.module.css';

function Thema01() {
    return (
        <div className={styles.thema}>
            <div className={styles.header}><h3>AP몰이 제안하는 테마이야기</h3></div>
            <div className={styles.body}>
                <ul className={styles.list}>
                    <li><img src='/images/product.png' alt='' /></li>
                    <li>제품</li>
                    <li>제품</li>
                    <li>제품</li>
                    <li>제품</li>
                </ul>
            </div>
        </div>
    )
}
export default Thema01;