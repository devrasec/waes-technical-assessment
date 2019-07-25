import React from 'react';
import { connect } from 'react-redux';

import { setHighlightColor as setHighlightColorAction } from '../redux/modules/highlightColor';
import highlightIcon from '../assets/icons/round-highlight.svg';
import { Button } from './Button';
import styles from './HighlightColorSelector.module.css';

type HighlightColorSelectorProps = {
  highlightColor: import('../types').Colors;
  setHighlightColor: typeof setHighlightColorAction;
};

export const HighlightColorSelector = ({
  highlightColor,
  setHighlightColor,
}: HighlightColorSelectorProps) => {
  return (
    <div className={styles.wrapper}>
      <Button
        active={highlightColor === 'RED'}
        color="RED"
        onClick={() => setHighlightColor('RED')}
      >
        <img src={highlightIcon} alt="highlight icon" />
      </Button>

      <Button
        active={highlightColor === 'YELLOW'}
        color="YELLOW"
        onClick={() => setHighlightColor('YELLOW')}
      >
        <img src={highlightIcon} alt="highlight icon" />
      </Button>

      <Button
        active={highlightColor === 'GREEN'}
        color="GREEN"
        onClick={() => setHighlightColor('GREEN')}
      >
        <img src={highlightIcon} alt="highlight icon" />
      </Button>
    </div>
  );
};

const mapStateToProps = (state: import('../redux/modules').AppState) => ({
  highlightColor: state.highlightColor,
});

export default connect(
  mapStateToProps,
  { setHighlightColor: setHighlightColorAction }
)(HighlightColorSelector);
