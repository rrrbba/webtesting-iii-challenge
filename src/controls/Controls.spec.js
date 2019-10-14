// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('it renders correctly', () => {
   render(<Controls />)
})

test('The door is locked on click', () => {
    const toggleLockMock = jest.fn();
    const { getByText } = render (
        <Controls toggleClosed = {toggleLockMock} />
    )
    fireEvent.click(getByText(/close gate/i));
    expect(toggleLockMock).toHaveBeenCalled()

    
})