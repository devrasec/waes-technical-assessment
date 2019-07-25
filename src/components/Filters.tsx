import React from 'react';

import { Button } from './Button';
import { HighlightIcon } from './HighlightIcon';

type FiltersProps = {
  filters: import('../types').Filters;
  onFilterClick: (color: import('../types').Colors) => void;
};

export const Filters = ({ filters, onFilterClick }: FiltersProps) => {
  return (
    <div>
      <Button
        active={filters.RED}
        color="RED"
        onClick={() => {
          onFilterClick('RED');
        }}
      >
        <HighlightIcon />
      </Button>
      <Button
        active={filters.YELLOW}
        color="YELLOW"
        onClick={() => {
          onFilterClick('YELLOW');
        }}
      >
        <HighlightIcon />
      </Button>
      <Button
        active={filters.GREEN}
        color="GREEN"
        onClick={() => {
          onFilterClick('GREEN');
        }}
      >
        <HighlightIcon />
      </Button>
    </div>
  );
};
