/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox } from '../components/shared/Checkbox';
import { CombineStories } from './CombineStories';

const meta: Meta = {
    title: 'Components/Inputs/Checkboxes',
    component: Checkbox,
    parameters: {
        docs: {
            description: {
                component: 'the checkbox component is used to let a user select options',
            },
        },
    },
};
export default meta;
export const AllCheckboxes: Story = () => (
    <CombineStories>
        <Checked />
        <Unchecked />
    </CombineStories>
);
export const Checked: Story = () => <Checkbox isChecked={true} onToggleCheckbox={action('Checked')} />;
export const Unchecked: Story = () => <Checkbox isChecked={false} onToggleCheckbox={action('Unchecked')} />;
