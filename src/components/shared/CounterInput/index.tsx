/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { FC, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { StyledCounterButton, StyledCounterInput, StyledCounterInputContainer } from './style';

export interface CounterInputProps {
    min: number;
    max: number;
    value: number;
    onChangeCounterValue: (value: number) => void;
}

export const CounterInput: FC<CounterInputProps> = ({ value, min, max, onChangeCounterValue }) => {
    const [formValue, setFormValue] = useState(value.toString());

    const onInputValueChange = (inputValue: string) => {
        // Ensure the input accepts only numbers and whitespace;
        const numberRegExp = /^(\s*|\d+)$/;

        if (!numberRegExp.test(inputValue)) {
            return;
        }

        const currentFormValue = parseInt(inputValue, 10);
        // Ensure we are not accepting a value above the specified min and max values.
        if (inputValue !== '' && (currentFormValue < min || currentFormValue > max)) {
            return;
        }

        setFormValue(inputValue.trim());
    };

    const onInputBlur = () => {
        const currentFormValue = parseInt(formValue, 10);
        // If the current is NaN, we update the formValue with the initial value.
        if (isNaN(currentFormValue)) {
            return setFormValue(value.toString());
        }

        // If the value is a number, we update the our counter value
        onChangeCounterValue(currentFormValue);
    };

    // Handler when using the increment button to update value.
    const onIncrementValue = () => {
        if (value >= max) {
            return;
        }
        const updateValue = value + 1;
        onChangeCounterValue(updateValue);
        setFormValue(updateValue.toString());
    };

    // Handler when using the decrement button to update value.
    const onDecrementValue = () => {
        if (value <= min) {
            return;
        }
        const updateValue = value - 1;
        onChangeCounterValue(updateValue);
        setFormValue(updateValue.toString());
    };

    useEffect(() => {
        // Only update formValue when value changes and the two don't match.
        if (value.toString() !== formValue) {
            setFormValue(value.toString());
        }
    }, [value]);

    return (
        <StyledCounterInputContainer>
            <StyledCounterButton
                isRightAligned={false}
                type="button"
                onClick={onDecrementValue}
                data-testid="decrement-button"
            >
                <ChevronLeft size={24} />
            </StyledCounterButton>

            <StyledCounterInput
                min={min}
                max={max}
                placeholder=""
                value={formValue}
                onBlur={onInputBlur}
                data-testid="counter-input"
                onChange={(e) => onInputValueChange(e.target.value)}
            />

            <StyledCounterButton
                isRightAligned={true}
                type="button"
                onClick={onIncrementValue}
                data-testid="increment-button"
            >
                <ChevronRight size={24} />
            </StyledCounterButton>
        </StyledCounterInputContainer>
    );
};
