import Head from "next/head";
import Image from "next/image";
import {Inter, Roboto} from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({subsets: ["latin"]});
const roboto = Roboto({subsets: ["latin"], weight: "400"});

export default function Home() {
    return (
        <>
            <Head>
                <title>HW1 - HomePage</title>
                <meta name="description" content="Homework 1"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${roboto.className}`}>
                <div className={styles.container}>
                    <header>
                        <h1 className={`${roboto.className}`}>Это главная страница для ДЗ 1</h1>
                    </header>
                    <div>
                        <ul>
                            <li>Создать проект на nextjs</li>
                            <li>Создать роутинг на 5 страниц (About, Home, Contacts, Blog, Account)</li>
                            <li>Добавить метатеги, смена названия вкладки</li>
                            <li>Создать навигацию на сайте</li>
                            <li>Добавить переходы на страницы</li>
                            <li>Добавить минимальную стилизацию</li>
                            <li>Добавить шрифты (Roboto, Inter)</li>
                        </ul>

                    </div>
                </div>
                {/*<div className={styles.center}>*/}
                {/*  <Image*/}
                {/*    className={styles.logo}*/}
                {/*    src="/next.svg"*/}
                {/*    alt="Next.js Logo"*/}
                {/*    width={180}*/}
                {/*    height={37}*/}
                {/*    priority*/}
                {/*  />*/}
                {/*</div>*/}


            </main>
        </>
    );
}
