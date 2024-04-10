import React from 'react';
import {Blog} from "@/types";

interface Props {
    blog: Blog
}
const BlogCard = ({blog}: Props) => {

    const {title, id} = blog;

    return (
        <span>ID: {id} - {title}</span>
    );
};

export default BlogCard;