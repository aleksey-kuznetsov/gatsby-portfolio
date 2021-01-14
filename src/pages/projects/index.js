import React from 'react';

import { Layout } from '../../components/layout';
import { projects } from '../../config/projects';

export default () => {
  return (
    <Layout>
      <h2 className="h2">Проекты</h2>
      <p>
        На данной странице представлен список проектов в разработке которых я
        принимал непосредственное участие.
      </p>

      {projects.length && (
        <>
          <h3>Список проектов</h3>
          <ul className="list">
            {projects.map(p => (
              <li key={p.name}>
                <p>
                  <a className="link" href={p.link}>
                    {p.name}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
};
