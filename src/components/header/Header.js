import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';

import styles from './Header.module.scss';

import { links } from '../../config/header';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>
        <Link to="/" className={styles.link}>
          Кузнецов А. В.
        </Link>
      </h1>

      <nav>
        <ul className={styles.navList}>
          {links.map(link => (
            <li key={link.to} className={styles.navListItem}>
              <Link
                to={link.to}
                className={clsx(styles.link, styles.navLink)}
                activeClassName={styles.navLinkActive}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
