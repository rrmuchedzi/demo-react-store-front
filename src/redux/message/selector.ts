/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Provides selectors to the message redux store
 */

import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

const message = (state: RootState) => {
    const currentMessage = state.message;
    return currentMessage.type != null && currentMessage.message != null ? currentMessage : undefined;
};

const messageId = (state: RootState) => {
    const currentMessage = state.message;
    return currentMessage.id;
};

export const selectMessage = createSelector([message], (currentMessage) => currentMessage);
export const selectMessageId = createSelector([messageId], (currentMessageId) => currentMessageId);
