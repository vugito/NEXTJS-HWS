import React from 'react';
import Head from "next/head";
import {eventsData} from "../../../lib/events-data";
import styles from "./Events.module.css";

const Events = () => {
    return (
        <>
            <Head>
                <title>HW1 - Contacts</title>
                <meta name="description" content="Contacts Page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <h1>Events Page</h1>
                <div className="container">
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Id</th>
                            <th className={styles.th}>Task label</th>
                            <th className={styles.th}>Task text</th>
                            <th className={styles.th}>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            eventsData.map((elem) => (
                                <tr className={styles.tr} key={elem.id}>
                                    <td className={styles.td}>{elem.id}</td>
                                    <td className={styles.td}>{elem.taskLabel}</td>
                                    <td className={styles.td}>{elem.taskText}</td>
                                    <td className={styles.td}>{elem.isComplete}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default Events;