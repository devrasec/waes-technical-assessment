import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Filters } from '../Filters';

test('should call callback function with the expected color', () => {
  const onFilterClick = jest.fn();
  const { getAllByTestId } = render(
    <Filters
      filters={{ RED: true, YELLOW: true, GREEN: true }}
      onFilterClick={onFilterClick}
    />
  );
  const buttons = getAllByTestId('button');
  expect(buttons).toHaveLength(3);
  // the first button is espected to be the RED filter toggle.
  const redButton = buttons[0];
  fireEvent.click(redButton);
  expect(onFilterClick).toBeCalledTimes(1);
  // should have only one argument, the color to toggle.
  expect(onFilterClick.mock.calls[0]).toHaveLength(1);
  expect(onFilterClick.mock.calls[0][0]).toBe('RED');
});
