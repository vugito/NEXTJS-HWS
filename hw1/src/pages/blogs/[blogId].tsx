import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import {blogsData} from "../../../lib/data";
import styles from "./Blogs.module.css";
import Link from "next/link";

const BlogDetails = () => {
    const {query} = useRouter();

    const renderBlog = () => {
        const blogIndex = blogsData.findIndex(blog => blog.id === Number(query.blogId));

        if (blogIndex !== -1) {
            const blog = blogsData[blogIndex];
            return (
                <div className={styles.blog}>
                    <h3>Blog Number - {query.blogId}</h3>
                    <h4>Title: {blog.title}</h4>
                    <p>{blog.body}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <span>Blog with ID {query.blogId} not found</span>
                </div>
            );
        }
    }


    return (
        <>
            <Head>
                <title>Blogs details {query.blogId}</title>
                <meta name="description" content="Blogs Page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.detailsContainer}>
                <h1>Blog Details</h1>
                {renderBlog()}
                <Link href="/blogs">
                    <button className={styles.backButton}>Back to Blog Page</button>
                </Link>
            </div>
        </>

    );
};

export default BlogDetails;