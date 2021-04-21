import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h3>Computer</h3>
          <h3>Science</h3>
          <h3>Developer</h3>
          <p>IT Analyst & web developer based in Porto.</p>
          <Link className={styles.btn} to="/post">My Post</Link>
        </div>
        <img src="/Aship.jpeg" alt="banner" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  )
}