/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { CounterInput, CounterInputProps } from '.';

describe('Counter Input tests', () => {
    const counterInputProps: CounterInputProps = {
        max: 10,
        min: 1,
        value: 2,
        onChangeCounterValue: (_: number) => {
            // do nothing in here for the test
        },
    };
    test('renders counter input', () => {
        const { getByTestId } = render(<CounterInput {...counterInputProps} />);
        const inputElement = getByTestId('counter-input');
        expect(inputElement).toBeInTheDocument();
    });

    test('increments counter value', () => {
        const { getByTestId } = render(<CounterInput {...counterInputProps} />);
        const inputElement = getByTestId('counter-input');
        const incrementButton = getByTestId('increment-button');

        fireEvent.click(incrementButton);

        expect(inputElement).toHaveValue('3');
    });

    test('decrements counter value', () => {
        const { getByTestId } = render(<CounterInput {...counterInputProps} />);
        const inputElement = getByTestId('counter-input');
        const decrementButton = getByTestId('decrement-button');

        fireEvent.click(decrementButton);

        expect(inputElement).toHaveValue('1');
    });
});
