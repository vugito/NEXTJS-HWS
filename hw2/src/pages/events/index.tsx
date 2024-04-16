import React from 'react';
import Head from "next/head";
import styles from "./Events.module.css";
import {eventsNewData} from "../../../lib/events-new-data";
// import EventItem from "@/components/EventItem/EventItem";
import EventCard from "@/components/EventCard/EventCard";

const Events = () => {

    // <Link key={elem.id} href={`/events/${elem.id}`}>
    //
    // </Link>


    return (
        <>
            <Head>
                <title>HW2 - Events</title>
                <meta name="description" content="Events Page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <h1>Events Page</h1>

                <div className={styles.eventsContainer}>
                    {
                        eventsNewData.map((event) => (
                            <>
                                <EventCard event={event} />
                            </>
                        ))
                    }
                </div>


                {/*<div className="container">                    */}
                {/*    <table className={styles.table}>*/}
                {/*        <thead className={styles.thead}>*/}
                {/*        <tr className={styles.tr}>*/}
                {/*            <th className={styles.th}>Id</th>*/}
                {/*            <th className={styles.th}>Task label</th>*/}
                {/*            <th className={styles.th}>Task text</th>*/}
                {/*            <th className={styles.th}>Status</th>*/}
                {/*            <th className={styles.th}>Actions</th>*/}
                {/*        </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        {*/}
                {/*            eventsData.map((elem) => (*/}
                {/*                <>*/}
                {/*                    <EventItem event={elem}/>*/}
                {/*                </>*/}
                {/*            ))*/}
                {/*        }*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</div>*/}
            </main>
        </>
    );
};

export default Events;