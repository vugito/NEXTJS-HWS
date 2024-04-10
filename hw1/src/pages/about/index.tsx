import React from 'react';
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>HW1 - About</title>
                <meta name="description" content="About Page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <h1>About screen</h1>
                <h2>Welcome to About screen</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nam.</p>
            </div>
        </>

    );
};

export default About;