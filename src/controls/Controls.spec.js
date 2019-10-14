// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('it renders correctly', () => {
   expect(render(<Controls />)).toMatchSnapshot();
   render(<Controls />);
})

test('The door is locked on click', () => {
    const toggleLockMock = jest.fn();
    const { getByText } = render (
        <Controls toggleClosed = {toggleLockMock} />
    )
    fireEvent.click(getByText(/close gate/i));
    expect(toggleLockMock).toHaveBeenCalled();
})

test('The door is unlocked', () => {
    const props = {
        locked: true
    };

    const unlock = render (
        <Controls locked = {props.locked} />
    )

    expect(unlock.getByText(/unlock gate/i).textContent).toBe('Unlock Gate');
})


