import React from 'react';

import '../../styles/index.scss';
import styles from './Layout.module.scss';

import { Header } from '../header';
import { Footer } from '../footer';

export const Layout = props => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>{props.children}</main>
      <Footer />
    </div>
  );
};
