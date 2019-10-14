// Test away!


import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';


test('it renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
 });

 test('The red-led is on', () => {
     const props = {
         locked: true
     }
     
     const { container } = render (
         <Display locked = {props.locked} />
     )
    
     const buttons = container.querySelectorAll('.led.red-led')
     
     const locked = buttons[0]
     expect(locked.textContent).toBe('Locked');
 })