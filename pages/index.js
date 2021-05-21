import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Anup K. Tamang | Fullstack Develper | Mentor | Content Creator!
        </title>
        <meta name='description' content='Anup K. Tamang portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <NavBar />
      </header>

      <main className={styles.main}>
        <h2>This is Main</h2>
      </main>

      <footer className={styles.footer}>
        <h3>This is Footer</h3>
      </footer>
    </div>
  )
}
