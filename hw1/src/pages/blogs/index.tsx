import React from 'react';
import {blogsData} from "../../../lib/data";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import styles from "@/pages/blogs/Blogs.module.css";
import Head from "next/head";
const Blogs = () => {
    return (
        <>
            <Head>
                <title>HW1 - Blogs</title>
                <meta name="description" content="Blogs Page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.container}>
                <span className={styles.title}>Blogs Page</span>

                <span className={styles.description}>Description</span>

                <h2>Blogs list</h2>

                <div className={styles.listСontainer}>
                    <ul className={styles.list}>
                        {blogsData.map((blog: any) => (
                            <Link key={blog.id} href={`/blogs/${blog.id}`}>
                                <li className={styles.listItem}>
                                    <BlogCard blog={blog}/>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>

            </div>
        </>

    );
};

export default Blogs;