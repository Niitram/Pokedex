import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './Views/Home/Home';


test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByTestId('home-container')).toBeInTheDocument();
});
