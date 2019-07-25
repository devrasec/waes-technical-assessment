import React, { MouseEvent, ReactNode } from 'react';

import styles from './Button.module.css';
type Colors = import('../types').Colors;
type ButtonProps = {
  color: Colors;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  active?: boolean;
};

const getClassName = (color: Colors) => {
  if (color === 'RED') return styles.buttonRed;
  if (color === 'YELLOW') return styles.buttonYellow;
  if (color === 'GREEN') return styles.buttonGreen;
  return styles.button;
};

export const Button = ({ color, onClick, children, active }: ButtonProps) => (
  <button
    className={`${getClassName(color)} ${active ? styles.active : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);
