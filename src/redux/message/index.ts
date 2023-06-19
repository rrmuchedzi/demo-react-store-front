/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Store message reducer, slice and actions.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageType } from '../../api/ constants/message';
import { setInfoMessageThunk } from './thunk';

export interface MessageState {
    message?: string;
    type?: MessageType;
    id?: string;
}

const initialState: MessageState = {};

// Create favorites slice and define the reducers for managing application messages.
const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setErrorMessage(draft, { payload }: PayloadAction<string>) {
            if (draft.type !== MessageType.CriticalError) {
                draft.message = payload;
                draft.type = MessageType.Error;
            }
        },
        dismissMessageBanner(draft) {
            if (draft.type === MessageType.CriticalError) return draft;
            return initialState;
        },
        clearNormalMessage(draft) {
            switch (draft.type) {
                case MessageType.Info:
                case MessageType.Error:
                    return initialState;
                default:
                    return draft;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setInfoMessageThunk.fulfilled, (draft, { meta }) => {
            if (draft.type !== MessageType.Error) {
                draft.message = meta.arg.message;
                draft.id = meta.requestId;
                draft.type = MessageType.Info;
            }
        });
    },
});

export const messageReducer = messageSlice.reducer;

export const { dismissMessageBanner, clearNormalMessage, setErrorMessage } = messageSlice.actions;
