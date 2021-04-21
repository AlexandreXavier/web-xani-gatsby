import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/post.module.css'

const Post = () => {
  return (
    <Layout>
      <div className={styles.post}>
        <h3>Post</h3>
      </div>
    </Layout>
  );
}
 
export default Post