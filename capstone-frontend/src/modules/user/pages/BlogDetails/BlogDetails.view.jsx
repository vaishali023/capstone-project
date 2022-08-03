import React from 'react';

import Layout from '../../components/Layout/Layout';
import BlogBody from './components/BlogBody/BlogBody';
import BlogHeader from './components/BlogHeader/BlogHeader';

export default function BlogDetailsView() {
  return (
    <Layout>
      <BlogHeader />
      <BlogBody />
    </Layout>
  );
}
