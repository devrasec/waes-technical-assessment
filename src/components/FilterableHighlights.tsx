import React from 'react';
import { connect } from 'react-redux';

import { HighlightList } from './HighlightList';
import { Filters } from './Filters';
import { getFilteredHighlights, getFilters } from '../redux/selectors';
import { toggleFilter as toggleFilterAction } from '../redux/modules/filters';

type FilterableHighlightsProps = {
  filteredHighlights: import('../types').HighlightTextArray;
  filters: import('../types').Filters;
  toggleFilter: typeof toggleFilterAction;
};

export const FilterableHighlights = ({
  filteredHighlights,
  filters,
  toggleFilter,
}: FilterableHighlightsProps) => {
  const hasHighlights = filteredHighlights.length > 0;

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Highlights</h3>
      {hasHighlights && <p>Filter your highlights using the buttons below.</p>}
      <Filters filters={filters} onFilterClick={toggleFilter} />
      {hasHighlights ? (
        <HighlightList highlights={filteredHighlights} />
      ) : (
        <p>You don't have highlights yet.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: import('../redux/modules').AppState) => ({
  filteredHighlights: getFilteredHighlights(state),
  filters: getFilters(state),
});

export default connect(
  mapStateToProps,
  { toggleFilter: toggleFilterAction }
)(FilterableHighlights);
