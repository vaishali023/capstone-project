import React from 'react';
import draftToHtml from 'draftjs-to-html';

import styles from './BlogBody.module.css';

const DEFAULT_CONTENT = {
  entityMap: {},
  blocks: [
    {
      key: '637gr',
      text: `Initialized from content state.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi accusamus hic suscipit asperiores doloribus iure magnam cumque tempora placeat repellendus fugit voluptas, minus enim obcaecati ipsam repellat eius amet aspernatur.
      `,
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

export default function BlogBody({ content = DEFAULT_CONTENT }) {
  return (
    <div className={styles.container}>
      <div className={styles.blogBodyWrapper}>
        <div dangerouslySetInnerHTML={{ __html: draftToHtml(content) }}></div>
      </div>
    </div>
  );
}
