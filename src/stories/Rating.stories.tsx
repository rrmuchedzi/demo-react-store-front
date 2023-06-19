/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { RatingProps, RatingTag } from '../components/shared/Rating';

const meta: Meta = {
    title: 'Components/Tags',
    component: RatingTag,
    parameters: {
        docs: {
            description: {
                component: 'A component for product rating tag',
            },
        },
    },
};
export default meta;

export const RatingTagStory: Story<RatingProps> = (args) => <RatingTag {...args} />;

RatingTagStory.args = {
    rating: 3.5,
};
