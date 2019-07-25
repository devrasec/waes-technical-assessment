import React from 'react';
import { connect } from 'react-redux';

import { Mark } from './Mark';
import styles from './HighlightList.module.css';

type HighlightListProps = {
  highlights: Array<import('../types').Highlight>;
  text: string;
};

export const HighlightList = ({ highlights, text }: HighlightListProps) => {
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
                <Mark
                  color={highlight.color}
                  text={text.slice(
                    highlight.selectionRange.start,
                    highlight.selectionRange.end
                  )}
                />
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

const mapStateToProps = (state: import('../redux/modules').AppState) => ({
  highlights: state.highlights,
  text: state.text,
});

export default connect(mapStateToProps)(HighlightList);
