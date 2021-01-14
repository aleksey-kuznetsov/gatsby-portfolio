import React from 'react';

import { Layout } from '../../components/layout';

export default () => {
  return (
    <Layout>
      <h2>Контакты</h2>

      <ul className="list">
        <li>
          <a className="link" href="mailto:work@akuznetsov.dev">
            Email
          </a>
        </li>
        <li>
          <a className="link" href="https://github.com/alekseyio">
            GitHub
          </a>
        </li>
      </ul>
    </Layout>
  );
};
