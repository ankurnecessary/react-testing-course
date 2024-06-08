import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link')
  expect(linkElement).toBeInTheDocument();
});

test('url is correct', () => {
  render(<App />);
  // Fetching a link on the basis of <a data-testid="learn-link" />
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement.href).toContain('ultimateqa.com');
});
