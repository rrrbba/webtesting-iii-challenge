// Test away

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';




test('it renders correctly', () => {
    render(<Dashboard />)
 });

 test('Contains lock and open ', () => {
     const { getByText } = render(
         <Dashboard />);
    getByText(/locked/i);
    getByText(/open/i)
});

