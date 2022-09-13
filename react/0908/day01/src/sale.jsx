import React from "react";
import styles from "./sale.module.css"
import Footer from "./component/footer";

function Sale() {
    return (
        <div className={styles.sale} >
            <div className={styles.subImg}></div>
            <div className={styles.content}>

            </div>
            <Footer />
        </div>
    )
}
export default Sale;