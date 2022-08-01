import React from 'react';
import BlogCard from './components/BlogCard/BlogCard';

import styles from './LatestBlog.module.css';

export default function LatestBlog() {
  const data = [
    {
      title: 'WHERE TO STAY IN CHICAGO: THE BEST NEIGHBORHOODS FOR YOUR VISIT',
      short_desc:
        'Chicago is famous for many things: the historic architecture, the dining scene is top-notch, Millennium Park, art museums, and, of course, the Cubs. You’ll be able to fill as much time as you have hear with a variety of activities.',
      img: 'https://media.nomadicmatt.com/2022/chicagostay.jpeg',
    },
    {
      title: 'THE 6 BEST HOSTELS IN OAXACA',
      short_desc:
        'Chicago is famous for many things: the historic architecture, the dining scene is top-notch, Millennium Park, art museums, and, of course, the Cubs. You’ll be able to fill as much time as you have hear with a variety of activities.',
      img: 'https://media.nomadicmatt.com/2022/bestoaxacahostels.jpeg',
    },
    {
      title: 'WHY TRAVEL MAKES YOU AWESOME',
      short_desc:
        'People always ask how travel has changed me. If I look back at who I was before I began traveling and compare that to',
      img: 'img/blogcard3.jpg',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Our latest reads</h1>
        <div className={styles.latestBlogList}>
          {data.map(({ title, short_desc, img }) => (
            <BlogCard title={title} short_desc={short_desc} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
}
