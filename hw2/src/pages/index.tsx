import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <header>
            <h1 className={`${inter.className}`}>Это главная страница для ДЗ 2</h1>
          </header>
          <div className={styles.tasksContainer}>
            <h2>Задача:</h2>
            <h3>Динамические страницы и Вложенные маршруты:</h3>
            <ol>
              <li>Создайте раздел Events в вашем проекте.</li>
              <li>Добавьте список ивентов</li>
              <li>Реализуйте динамическую страницу для каждого события, используя [eventId].tsx.</li>
              <li>Добавьте вложенные маршруты для фотографий события, используя [eventId]/photos/[photoId].tsx.</li>
              <li>Добавьте переход на EventDetails при клике на один ивент.</li>
            </ol>
            <h3>Обработка ошибок:</h3>
            <ol>
              <li>Реализуйте страницу 404 с использованием файла not-found.tsx.</li>
              <li>Добавьте логику на странице 404 для перенаправления на главную страницу после некоторого времени.</li>
            </ol>

            <h3>Программная навигация:</h3>
            <ol>
              <li>Используйте router.push() для программного перехода между страницами.</li>
            </ol>

            <h3>Множественные параметры:</h3>
            <ol>
              <li>Исследуйте возможности множественных параметров с помощью [...params].tsx.</li>
            </ol>

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
