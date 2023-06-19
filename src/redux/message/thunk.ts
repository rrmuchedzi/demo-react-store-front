/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Provides redux actions for the message store
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearNormalMessage } from '.';
import { RootState } from '../../store';
import { selectMessageId } from './selector';

interface MessageThunkPayload {
    message: string;
    persistent?: boolean;
    duration?: number;
}

interface MessageToClear {
    duration: number;
    messageId: string;
}

// Info, Warning and Error messages should all disappear after 5 seconds unless otherwise specified by Product/UX.
const clearMessageAfterDelayThunk = createAsyncThunk<void, MessageToClear, { state: RootState }>(
    'message/clear-message-after-delay',
    async ({ duration, messageId: idOfMessageToClear }, { dispatch, getState }) => {
        /**
         * An ID is used to prevent us from dismissing a newer message which has since replaced the message which this timeout
         * was set up to clear.
         */
        setTimeout(() => {
            const idOfCurrentMessage = selectMessageId(getState());
            if (idOfCurrentMessage === idOfMessageToClear) dispatch(clearNormalMessage());
        }, duration);
    },
);

export const setInfoMessageThunk = createAsyncThunk<void, MessageThunkPayload, { state: RootState }>(
    'message/set-info-message',
    async ({ persistent = false, duration = 5000 }, { dispatch, requestId: messageId }) => {
        if (!persistent) dispatch(clearMessageAfterDelayThunk({ duration, messageId }));
    },
);
