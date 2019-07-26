import React from 'react';
import { render } from '@testing-library/react';
import nanoid from 'nanoid';

import { HighlightList } from '../HighlightList';

const highlights: import('../../types').HighlightTextArray = [
  {
    id: nanoid(),
    text: 'The grass is greener where you water it',
    color: 'GREEN',
  },
  {
    id: nanoid(),
    text: 'Wherever life plants you, bloom with grace',
    color: 'YELLOW',
  },
];

test('should render the expected number of highlights in the correct order', () => {
  const { getAllByTestId } = render(<HighlightList highlights={highlights} />);
  const highlightItems = getAllByTestId('highlight-list-item');

  expect(highlightItems).toHaveLength(2);
  expect(highlightItems[0]).toHaveTextContent(
    'The grass is greener where you water it'
  );
  expect(highlightItems[0].firstChild).toHaveClass('green');
  expect(highlightItems[1]).toHaveTextContent(
    'Wherever life plants you, bloom with grace'
  );
  expect(highlightItems[1].firstChild).toHaveClass('yellow');
});
