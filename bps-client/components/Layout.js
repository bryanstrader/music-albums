import Head from 'next/head'
import Nav from '../components/Nav'
import Header from '../components/Header'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Stoic Systems</title>
                <meta name='keywords' content='web development, software development' />

                <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
                <link rel="stylesheet" type="text/css" href="/dist/semantic.min.css" />
                <script src="/dist/semantic.min.js"></script>
            </Head>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout