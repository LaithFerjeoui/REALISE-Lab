import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import styles from './styles.module.css';

export default function BlogPostPageWrapper(props) {
  return (
    <>
      <BlogPostPage {...props} />
    </>
  );
}
