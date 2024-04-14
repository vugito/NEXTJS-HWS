import React from 'react';
import styles from "./BasicLayout.module.css";
import {Roboto} from "next/font/google";
import {Inter} from "next/font/google";
import Link from "next/link";

interface Props {
    children: React.ReactNode
}

const roboto = Roboto({subsets: ["latin"], weight: "400"});
const inter = Inter({subsets:["latin"]});

const BasicLayout = ({children}: Props) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>

                <div className={styles.logoContainer}>
                    <h1 className={`${styles.logo} ${inter.className}`}>AV</h1>
                </div>

                <nav className={styles.navContainer}>
                    <ul className={styles.ulContainer}>
                        <li className={`${styles.liItem} ${roboto.className}`}><Link href="/">Home</Link></li>
                        <li className={`${styles.liItem} ${roboto.className}`}><Link href="/events">Events</Link></li>
                    </ul>
                </nav>

            </header>
            <div className={styles.content}>
                {children}
            </div>
            <footer className={styles.footerContainer}>
                <p className={`${styles.footerText} ${roboto.className}`}>
                    Copyright by Vugar Aliyev | FBES-4215 | 2024
                </p>
            </footer>
        </div>
    );
}

export default BasicLayout;