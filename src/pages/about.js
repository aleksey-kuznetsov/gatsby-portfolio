import React from 'react';

import { Layout } from '../components/layout';
import { experience } from '../config/experience';

export default () => {
  return (
    <Layout>
      <h2 className="h2">Обо мне</h2>
      <p>
        Я занимаюсь веб-разработкой уже более 3-х лет, профессионально - более
        года.
      </p>

      {experience.length && (
        <>
          <h3>Опыт работы</h3>
          <ul className="list">
            {experience.map(e => (
              <li key={e.company}>
                <p>
                  <a className="link" href={e.link}>
                    {e.company}
                  </a>{' '}
                  ({e.position})
                </p>
                <p>
                  {e.from} - {e.to}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
};
