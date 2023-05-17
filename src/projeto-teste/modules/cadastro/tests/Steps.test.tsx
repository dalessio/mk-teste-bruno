import React from 'react';
import { render, screen } from '@testing-library/react';
import Step1 from '../pages/Step1';

test('renders Teste react p', () => {
  render(<Step1 />);
  const linkElement = screen.getByText(/Teste/i);
  expect(linkElement).toBeInTheDocument();
});
