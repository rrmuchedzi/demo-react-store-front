/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { AnchorButton, AnchorButtonProps } from '../components/shared/Buttons/Anchor';
import { ButtonType } from '../components/shared/Buttons/style';

const meta: Meta = {
    title: 'Components/Buttons/Anchor',
    component: AnchorButton,
    parameters: {
        docs: {
            description: {
                component: 'The anchored button component is used changing routes',
            },
        },
    },
};
export default meta;

export const Base: Story<AnchorButtonProps> = (args) => (
    <BrowserRouter>
        <AnchorButton {...args} />
    </BrowserRouter>
);
export const Primary: Story = () => (
    <BrowserRouter>
        <AnchorButton variation={ButtonType.Primary} label="Primary" path="" />
    </BrowserRouter>
);
export const Secondary: Story = () => (
    <BrowserRouter>
        <AnchorButton variation={ButtonType.Secondary} label="Secondary" path="" />
    </BrowserRouter>
);
export const Light: Story = () => (
    <BrowserRouter>
        <AnchorButton variation={ButtonType.Light} label="Light" path="" />
    </BrowserRouter>
);
export const Danger: Story = () => (
    <BrowserRouter>
        {' '}
        <AnchorButton variation={ButtonType.Danger} label="Danger" path="" />
    </BrowserRouter>
);

Base.args = {
    disabled: false,
    label: 'Anchor Button',
    variation: ButtonType.Primary,
};
