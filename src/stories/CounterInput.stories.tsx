/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { MAX_PRODUCT_ORDER_COUNT, MIN_PRODUCT_ORDER_COUNT } from '../api/ constants/products';
import { CounterInput, CounterInputProps } from '../components/shared/CounterInput';

const meta: Meta = {
    title: 'Components/Inputs',
    component: CounterInput,
    parameters: {
        docs: {
            description: {
                component: 'The Counter Input as a number value input',
            },
        },
    },
};
export default meta;

export const CounterInputStory: Story<CounterInputProps> = (args) => {
    const [value, setValue] = useState(args.value);

    const handleSelectValueChange = (valueUpdate: number) => {
        setValue(valueUpdate);
    };
    return <CounterInput value={value} onChangeCounterValue={handleSelectValueChange} max={args.max} min={args.min} />;
};

CounterInputStory.args = {
    max: MAX_PRODUCT_ORDER_COUNT,
    min: MIN_PRODUCT_ORDER_COUNT,
    value: MIN_PRODUCT_ORDER_COUNT,
};
