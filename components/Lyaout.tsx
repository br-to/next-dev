import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilsStyles from '../styles/utils.module.css';

const name = 'Toi Kobara';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <Image
        className={utilsStyles.borderCircle}
        src="/images/super.png"
        alt=""
        width={100}
        height={100}
      />
      <h1>{name}</h1>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
