/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { Loader } from '../components/shared/Loader';

const meta: Meta = {
    title: 'Components/Loaders',
    component: Loader,
    parameters: {
        docs: {
            description: {
                component:
                    'The Loader component is used to let a user know  the platform is working on their action/request',
            },
        },
    },
};
export default meta;
export const LoaderIndicator: Story = () => <Loader />;
