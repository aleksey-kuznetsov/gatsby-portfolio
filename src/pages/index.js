import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './index.module.scss';

import { Layout } from '../components/layout';

export default ({ data }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.headingName}>Привет! 👋</h2>
          <h2 className={styles.headingIntro}>
            Меня зовут Кузнецов Алексей, я веб-разработчик.
          </h2>
        </div>

        <div className={styles.imageContainer}>
          <Img
            fixed={data.file.childImageSharp.fixed}
            className={styles.image}
          />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpeg" }) {
      childImageSharp {
        fixed(width: 192, height: 192) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
