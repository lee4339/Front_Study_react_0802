import React from "react";
import styles from './header.module.css'
function Header() {
    return (
        <div className="header">
            <div className={styles.headerIn}>
                <h1 className={styles.logo}><img /></h1>
                <nav className={styles.menu}>
                    <ul>
                        <li>menu</li>
                        <li>menu</li>
                        <li>menu</li>
                        <li>menu</li>
                        <li>menu</li>
                        <li>menu</li>
                        <li>menu</li>
                        <li>menu</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header;
