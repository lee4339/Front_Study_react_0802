import React from "react";
import styles from './best.module.css';

function Best() {
    return (
        <div className={styles.best}>
            <div className={styles.header}>
                <h3>AP몰 베스트상품</h3>
            </div>
            <div className={styles.body}>
                <ul className={styles.list}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
export default Best;