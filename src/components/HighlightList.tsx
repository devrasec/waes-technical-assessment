import React from 'react';

import { Mark } from './Mark';
import styles from './HighlightList.module.css';

type HighlightListProps = {
  highlights: import('../types').HighlightTextArray;
};

export const HighlightList = ({ highlights }: HighlightListProps) => {
  return (
    <ul className={styles.highlightList}>
      {highlights.map(highlight => (
        <li
          data-testid="highlight-list-item"
          key={highlight.id}
          className={styles.highlight}
        >
          <Mark color={highlight.color} text={highlight.text} />
        </li>
      ))}
    </ul>
  );
};
