import React from 'react';
import { API_URL } from "../../../../utils/constants";
import Layout from '../../components/Layout/Layout';
import EWV from './components/EWV/EWV';
import Hero from './components/Hero/Hero';
import LatestBlog from './components/LatestBlog/LatestBlog';
import PopularPlaces from './components/PopularPlaces/PopularPlaces';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';

export default function HomePageView() {

  const [blogList, setBlogList] = React.useState([]);

  React.useEffect(() => {
    getBlogItems()
  }, []);

  async function getBlogItems() {
    try {
      const response = await fetch(`${API_URL}/blogs/latest`);
      const data = await response.json();
      setBlogList(data.blogs);
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <Layout>
      <Hero img="/img/heroImage.jpg" />
      <EWV />
      <PopularPlaces />
      <LatestBlog data={blogList}/>
      <PhotoGallery />
    </Layout>
  );
}
