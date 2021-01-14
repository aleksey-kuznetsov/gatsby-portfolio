import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Создано с использованием{' '}
        <a className="link" href="https://www.gatsbyjs.com/">
          Gatsby.js
        </a>
      </p>
      <p>Алексей Кузнецов, &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};
