/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../components/shared/Buttons/Button';
import { ButtonType } from '../components/shared/Buttons/style';

const meta: Meta = {
    title: 'Components/Buttons/Button',
    component: Button,
    parameters: {
        docs: {
            description: {
                component: 'The button component is used to initiate actions from a click event',
            },
        },
    },
};
export default meta;

export const Base: Story<ButtonProps> = (args) => <Button {...args} />;
export const Primary: Story = () => <Button variation={ButtonType.Primary} label="Primary" onClick={() => null} />;
export const Secondary: Story = () => (
    <Button variation={ButtonType.Secondary} label="Secondary" onClick={() => null} />
);
export const Light: Story = () => <Button variation={ButtonType.Light} label="Light" onClick={() => null} />;
export const Danger: Story = () => <Button variation={ButtonType.Danger} label="Danger" onClick={() => null} />;

Base.args = {
    disabled: false,
    label: 'Base Button',
    variation: ButtonType.Primary,
};
