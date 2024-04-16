import React from 'react';
import styles from "./EventItem.module.css";
import {Event} from "@/types";
import Link from "next/link";


interface Props {
    event: Event
}


const EventItem = ({event}: Props) => {
    return (

        <tr className={styles.tr} key={event.id}>
            <td className={styles.td}>{event.id}</td>
            {/*<td className={styles.td}>{event.taskLabel}</td>*/}
            {/*<td className={styles.td}>{event.taskText}</td>*/}
            {/*<td className={styles.td}>{event.isComplete ? "Выполнено" : "Не выполнено"}</td>*/}
            <td className={`${styles.td} ${styles.btnContainer}`}>
                <Link key={event.id} href={`/events/${event.id}`}>
                    <button className={styles.btn}>Info</button>
                </Link>
            </td>
        </tr>
    )
        ;
};

export default EventItem;