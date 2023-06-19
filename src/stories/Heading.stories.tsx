/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '../components/shared/Heading';

const meta: Meta = {
    title: 'Components/Text',
    component: Heading,
    parameters: {
        docs: {
            description: {
                component: 'A collection of heading tags from <h1> to <h6>',
            },
        },
    },
};
export default meta;

export const HeadingsStory: Story<HeadingProps> = (args) => <Heading {...args}>{args.title}</Heading>;

HeadingsStory.args = {
    level: 3,
    title: 'A title worth reading twice',
};
