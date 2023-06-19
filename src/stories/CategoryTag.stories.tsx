/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { CategoryTag, CategoryTagProps } from '../components/shared/CategoryTag';

const meta: Meta = {
    title: 'Components/Tags',
    component: CategoryTag,
    parameters: {
        docs: {
            description: {
                component: 'A component for product categories',
            },
        },
    },
};
export default meta;

export const CategoryTagStory: Story<CategoryTagProps> = (args) => <CategoryTag {...args} />;

CategoryTagStory.args = {
    category: 'Custom Name',
};
