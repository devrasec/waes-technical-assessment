import React from 'react';

import styles from './Mark.module.css';

type Colors = import('../types').Colors;

type MarkProps = {
  text: string;
  color: Colors;
  highlightOnly?: boolean;
};

// Mapping correct styles to Colors values.
const colorMap: { [K in Colors]: string } = {
  RED: styles.red,
  YELLOW: styles.yellow,
  GREEN: styles.green,
};

export const Mark = ({ text, color, highlightOnly }: MarkProps) => (
  <mark
    data-testid="mark-tag"
    className={`${colorMap[color]} ${highlightOnly ? styles.highlight : ''}`}
  >
    {text}
  </mark>
);
