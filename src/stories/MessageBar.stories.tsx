/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import { StoreMessageBar, MessageBarProps } from '../components/general/MessageBar';
import { store } from '../store';

const meta: Meta = {
    title: 'Components/Text',
    component: StoreMessageBar,
    parameters: {
        docs: {
            description: {
                component: 'A message bar component for displaying application messages or notifications',
            },
        },
    },
    decorators: [
        (MessageBarPartial) => (
            <Provider store={store}>
                <MessageBarPartial />
            </Provider>
        ),
    ],
};
export default meta;

export const MessageBarStory: Story<MessageBarProps> = (args) => <StoreMessageBar {...args} />;

MessageBarStory.args = {
    className: 'message-bar-class',
};
