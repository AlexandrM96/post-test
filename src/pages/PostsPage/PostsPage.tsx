import React from "react";
import styles from "./PostsPage.module.css";
import { useGetPostsQuery } from "../../store/posts/postsApi";
import Post from "../../components/Post/Post";
import { IPost } from "../../interfaces/post.interface";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const PostsPage = () => {

  const [itemOffset, setItemOffset] = useState(0);

  const { data } = useGetPostsQuery("posts");

  let items: IPost[] = [];
  const endOffset = itemOffset + 10;
  let currentItems: IPost[] = [];
  let pageCount = 0;

  if (data !== undefined) {
    data.map((item: IPost) => {
      items.push(item);
    });
    currentItems = items.slice(itemOffset, endOffset);
    pageCount = Math.ceil(items.length / 10);
  }

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 10) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        {currentItems &&
          currentItems.map((post: IPost) => <Post key={post.id} post={post} />)}
      </div>
      <div className={styles.pagination_container}>
        <ReactPaginate
          breakLabel={"..."}
          breakClassName={styles.btnPagN}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={styles.btnPag}
          activeClassName={`${styles.breakLabel} ${styles.btnPagActive}`}
          pageClassName={styles.btnPagN}
          previousClassName={styles.btnPagL}
          nextClassName={styles.btnPagR}
          disabledClassName={"disabled"}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default PostsPage;
