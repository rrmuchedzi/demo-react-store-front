/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { messageReducer, setErrorMessage, dismissMessageBanner, clearNormalMessage } from '.';
import { MessageType } from '../../api/ constants/message';

describe('Message slice tests', () => {
    it('should handle setting an error message', () => {
        const state = {
            message: 'This is an error!',
            type: MessageType.Error,
        };
        const actual = messageReducer(state, setErrorMessage('This is another error!'));
        const expected = {
            message: 'This is another error!',
            type: MessageType.Error,
        };
        expect(actual).toEqual(expected);
    });

    it('should handle dismissing the message banner', () => {
        const state = {
            message: 'This is a banner!',
            type: MessageType.Info,
        };
        const actual = messageReducer(state, dismissMessageBanner());
        const expected = {};
        expect(actual).toEqual(expected);
    });

    it('should handle clearing a normal message', () => {
        const state = {
            message: 'This is a normal message!',
            type: MessageType.Info,
        };
        const actual = messageReducer(state, clearNormalMessage());
        const expected = {};
        expect(actual).toEqual(expected);
    });
});
