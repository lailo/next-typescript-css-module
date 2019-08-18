import React from 'react'
import { NextPage } from 'next'
import styles from './styles.scss'

const Page: NextPage = () => (
  <main className={styles.indexPage}>
    <header className={styles.header}>Hello</header>
    <div className={styles.info}>World</div>
  </main>
)

export default Page
