import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title> Instagram 2.0</title> 
        </Head>
        
        <Header />
        <Feed />

      {/* Modal */}


    </div>
  )
}
