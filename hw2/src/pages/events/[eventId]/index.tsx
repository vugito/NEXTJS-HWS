import React from 'react';
import {Event} from "@/types";
import {eventsNewData} from "../../../../lib/events-new-data";

interface Props {
    event: Event
}

const EventDetails = ({event}:Props) => {



    return (
        <div>

        </div>
    );
};

export default EventDetails;

const getServerSideProps = (context: any) => {

    console.log("context => ", context);
    const {params} = context;
    const event = eventsNewData.find(event => event.id === Number(params.eventId))
    console.log("Params ->> ", params);

    return {
        props: {
            event
        },
    }
}