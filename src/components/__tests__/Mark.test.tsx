import React from 'react';
import { render } from '@testing-library/react';

import { Mark } from '../Mark';
const text = 'Hello world!';
const regexpText = /^Hello world!$/;

test('should render red highlight with transparent text', () => {
  const { getByTestId } = render(
    <Mark text={text} color="RED" highlightOnly />
  );
  const mark = getByTestId('mark-tag');
  expect(mark).toHaveClass('highlight red');
  expect(mark).toHaveTextContent(regexpText);
});

test('should render yellow highlighted text', () => {
  const { getByTestId } = render(<Mark text={text} color="YELLOW" />);
  const mark = getByTestId('mark-tag');
  expect(mark).not.toHaveClass('highlight');
  expect(mark).toHaveClass('yellow');
  expect(mark).toHaveTextContent(regexpText);
});
