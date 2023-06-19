/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { Paragraph, ParagraphProps } from '../components/shared/Paragraph';

const meta: Meta = {
    title: 'Components/Text',
    component: Paragraph,
    parameters: {
        docs: {
            description: {
                component: 'A component for application paragraph',
            },
        },
    },
};
export default meta;

interface ParagraphStoryProps extends ParagraphProps {
    value: string;
}

export const ParagraphStory: Story<ParagraphStoryProps> = (args) => <Paragraph {...args}>{args.value}</Paragraph>;

ParagraphStory.args = {
    value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    title: 'Paragraph content',
};
