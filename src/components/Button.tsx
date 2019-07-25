import React, { MouseEvent, ReactNode } from 'react';

import styles from './Button.module.css';
type Colors = import('../types').Colors;
type ButtonProps = {
  color: Colors;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  active?: boolean;
};

const colorMap: { [K in Colors]: string } = {
  RED: styles.buttonRed,
  YELLOW: styles.buttonYellow,
  GREEN: styles.buttonGreen,
};

export const Button = ({ color, onClick, children, active }: ButtonProps) => (
  <button
    className={`${colorMap[color]} ${active ? styles.active : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);
