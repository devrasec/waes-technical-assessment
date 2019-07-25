import React from 'react';
import { connect } from 'react-redux';

import { setHighlightColor as setHighlightColorAction } from '../redux/modules/highlightColor';
import { Button } from './Button';
import { HighlightIcon } from './HighlightIcon';
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
        <HighlightIcon />
      </Button>

      <Button
        active={highlightColor === 'YELLOW'}
        color="YELLOW"
        onClick={() => setHighlightColor('YELLOW')}
      >
        <HighlightIcon />
      </Button>

      <Button
        active={highlightColor === 'GREEN'}
        color="GREEN"
        onClick={() => setHighlightColor('GREEN')}
      >
        <HighlightIcon />
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
