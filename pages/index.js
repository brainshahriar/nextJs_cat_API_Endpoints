import Head from 'next/head'
import { Jumbotron } from '../components/jumbotron/Jumbotron'
import Nav from '../components/nav/Nav'
import styles from '../styles/Home.module.css'
import DefaultLayout from '../layout/Default'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DefaultLayout>
        <Jumbotron/>
        </DefaultLayout>
      
      </main>
    </div>
  )
}
