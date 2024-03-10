import React from "react";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import { PostProps } from "./Post.props";
import useActions from "../../hooks/useActions";

const Post = ({ post }: PostProps) => {
  
  const { addPost } = useActions();

  return (
    <Link to="/one-post" className={styles.main} onClick={() => addPost(post)}>
      <span className={styles.main_title}>{post.title}</span>
    </Link>
  );
};

export default Post;
