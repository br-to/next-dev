import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Lyaout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';

const Home = () => (
  <Layout>
    <section className={utilStyles.headingMd}>
      <p>ハロー</p>
    </section>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2>ブログ</h2>
      <div className={styles.grid}>
        <article>
          <Link href="/">
            <Image
              src="/images/thumbnail01.jpg"
              alt=""
              width={300}
              height={200}
              layout="responsive"
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/">
            <a className={utilStyles.boldText}>テスト</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>2022/10/22 10:00</small>
        </article>
        <article>
          <Link href="/">
            <Image
              src="/images/thumbnail01.jpg"
              alt=""
              width={300}
              height={200}
              layout="responsive"
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/">
            <a className={utilStyles.boldText}>テスト</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>2022/10/22 10:00</small>
        </article>
        <article>
          <Link href="/">
            <Image
              src="/images/thumbnail01.jpg"
              alt=""
              width={300}
              height={200}
              layout="responsive"
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/">
            <a className={utilStyles.boldText}>テスト</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>2022/10/22 10:00</small>
        </article>
        <article>
          <Link href="/">
            <Image
              src="/images/thumbnail01.jpg"
              alt=""
              width={300}
              height={200}
              layout="responsive"
              className={styles.thumbnailImage}
            />
          </Link>
          <a className={utilStyles.boldText}>テスト</a>
          <br />
          <small className={utilStyles.lightText}>2022/10/22 10:00</small>
        </article>
      </div>
    </section>
  </Layout>
);

export default Home;
