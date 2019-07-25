import React from 'react';
import { connect } from 'react-redux';

import { HighlightList } from './HighlightList';
import { getFilteredHighlights } from '../redux/selectors';

type FilterableHighlightsProps = {
  filteredHighlights: import('../types').HighlightTextArray;
};

export const FilterableHighlights = ({
  filteredHighlights,
}: FilterableHighlightsProps) => {
  return (
    <div>
      <HighlightList highlights={filteredHighlights} />
    </div>
  );
};

const mapStateToProps = (state: import('../redux/modules').AppState) => ({
  filteredHighlights: getFilteredHighlights(state),
});

export default connect(mapStateToProps)(FilterableHighlights);
