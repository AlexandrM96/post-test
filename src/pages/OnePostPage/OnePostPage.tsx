import React from "react";
import styles from "./OnePostPage.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const OnePostPage = () => {
  
  const { postElement } = useTypedSelector((state) => state);

  return (
    <div className={styles.main}>
      <ul className={styles.info}>
        <li>
          <span>Title:</span>
          <span>{postElement[0].title}</span>
        </li>
        <li>
          <span>Body:</span>
          <span>{postElement[0].body}</span>
        </li>
        <li>
          <span>Id:</span>
          <span>{postElement[0].id}</span>
        </li>
        <li>
          <span>UserId:</span>
          <span>{postElement[0].userId}</span>
        </li>
      </ul>
    </div>
  );
};

export default OnePostPage;
