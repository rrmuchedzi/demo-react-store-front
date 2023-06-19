/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { IconButton, IconButtonProps } from '../components/shared/Buttons/IconButton';
import { IconButtonTypes } from '../components/shared/Buttons/IconButton/style';

const meta: Meta = {
    title: 'Components/Buttons/Icons',
    component: IconButton,
    parameters: {
        docs: {
            description: {
                component: 'The icon button component is used to initiate actions from a click event',
            },
        },
    },
};
export default meta;

export const LikeIconButton: Story<IconButtonProps> = (args) => <IconButton {...args} />;

LikeIconButton.args = {
    size: 64,
    active: false,
    iconType: IconButtonTypes.Like,
};
