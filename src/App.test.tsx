import { render, screen }from '@testing-library/react'
import App from './App'

test('Check the title', () => {
  render(<App />)
  const divElement = screen.getByText(/nachete subs/i)
  expect(divElement).toBeInTheDocument();
});

test('Check the button text', () => {
  render(<App />)
  const divElement = screen.getByText(/Save new subs/i)
  expect(divElement).toBeInTheDocument();
});
