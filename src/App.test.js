// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TypeCheck title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TypeCheck/i);
    expect(titleElement).toBeInTheDocument();
});
