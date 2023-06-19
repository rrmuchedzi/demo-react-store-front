/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { PaginationInput, PaginationInputProps } from '../components/shared/PaginationInput';

const meta: Meta = {
    title: 'Components/Inputs',
    component: PaginationInput,
    parameters: {
        docs: {
            description: {
                component: 'The pagination input menu used to switch active pages',
            },
        },
    },
};
export default meta;

export const PaginationInputStory: Story<PaginationInputProps> = (args) => {
    const [current, setValue] = useState(args.current);

    const handleSelectValueChange = (pageIndex: number) => {
        setValue(pageIndex);
    };

    return <PaginationInput current={current} totalPages={args.totalPages} onChangePage={handleSelectValueChange} />;
};

PaginationInputStory.args = {
    current: 1,
    totalPages: 10,
};
