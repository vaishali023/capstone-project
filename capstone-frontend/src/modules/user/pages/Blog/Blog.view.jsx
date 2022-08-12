import React from "react";

import { API_URL } from "../../../../utils/constants";
import Layout from "../../components/Layout/Layout";
import Hero from "../Home/components/Hero/Hero";
import BlogList from "./components/BlogList/BlogList";

export default function BlogView() {
  // const [blogList, setBlogList] = React.useState([]);

  // React.useEffect(() => {
  //   getBlogItems()
  // }, []);

  // async function getBlogItems() {
  //   try {
  //     const response = await fetch(`${API_URL}/blogs`);
  //     const data = await response.json();
  //     setBlogList(data.blogs);
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // }
  return (
    <Layout>
      <Hero img="/img/train.jpg" centerText="To plan your vacation simply, we write travel blogs on the most stunning locations on earth." location="Glenfinnan Viaduct, Glenfinnan, United Kingdom"/>
      <BlogList  />
    </Layout>
  );
}
