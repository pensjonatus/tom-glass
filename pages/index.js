import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import cover from "../public/dj-glass-is-tom.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tom Glass</title>
        <meta name="description" content="Strona DJa Tom Glass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Tom Glass</h1>
        </div>
      </main>
    </div>
  );
}
