/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { SelectInput, SelectInputProps } from '../components/shared/SelectInput';

const meta: Meta = {
    title: 'Components/Inputs',
    component: SelectInput,
    parameters: {
        docs: {
            description: {
                component: 'The Select Input component is used to select one option from many',
            },
        },
    },
};
export default meta;

export const SelectInputStory: Story<SelectInputProps> = (args) => {
    const [value, setValue] = useState(args.selected);

    const handleSelectValueChange = (valueUpdate: string) => {
        setValue(valueUpdate);
    };
    return <SelectInput selected={value} onValueChange={handleSelectValueChange} options={args.options} />;
};

SelectInputStory.args = {
    options: ['one', 'two', 'three', 'four'],
    selected: 'one',
};
