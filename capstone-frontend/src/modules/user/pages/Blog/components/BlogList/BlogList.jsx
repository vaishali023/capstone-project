import React from 'react';
import BlogCard from '../../../Home/components/LatestBlog/components/BlogCard/BlogCard';
import { API_URL } from '../../../../../../utils/constants';
import styles from './BlogList.module.css';

export default function BlogList() {

  const [blogList, setBlogList] = React.useState([]);
  const [visible, setVisible] = React.useState(3);

  React.useEffect(() => {
    getBlogItems()
  }, []);

  async function getBlogItems() { 
    try {
      const response = await fetch(`${API_URL}/blogs`);
      const data = await response.json();
      setBlogList(data.blogs);
      console.log(data);
    } catch (error) {
      console.log({ error });
    }
  }

  const loadMoreItems = () => {
    setVisible((preValue) => preValue + 3);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Blog</h1>
        <div className={styles.blogList}>
          {blogList.slice(0,visible).map(({ title, short_desc, image, author, _id }) => (
            <BlogCard id={_id} title={title} short_desc={short_desc} img={image.secure_url} authorName={author.name} />
          ))}
        </div>
        <div className={styles.loadMore}>
          <button onClick={loadMoreItems}>Load More</button>
        </div>
      </div>
    </div>
  );
}