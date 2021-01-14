import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout>
      <h2>Этой страницы не существует</h2>
      <p>
        <Link to="/" className="link">
          Перейти на главную страницу
        </Link>
      </p>
    </Layout>
  );
};
