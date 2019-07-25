import React from 'react';

import { Mark } from './Mark';
import styles from './HighlightList.module.css';

type HighlightListProps = {
  highlights: import('../types').HighlightTextArray;
};

export const HighlightList = ({ highlights }: HighlightListProps) => {
  const hasHighlights = highlights.length > 0;

  return (
    <div>
      <h3>Highlights</h3>
      {hasHighlights ? (
        <>
          <p>Filter your highlights using the buttons below.</p>
          <ul className={styles.highlightList}>
            {highlights.map(highlight => (
              <li key={highlight.id} className={styles.highlight}>
                <Mark color={highlight.color} text={highlight.text} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>You don't have highlights yet.</p>
      )}
    </div>
  );
};
