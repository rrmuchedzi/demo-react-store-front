/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import styled, { css } from 'styled-components';
import { MessageType } from '../../../api/ constants/message';
import { carnation, deepSea, white } from '../../../style/color';

export const StyledMessageBarContainer = styled.div<{ type?: MessageType }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 10px auto 0 auto;

    ${({ type }) => {
        if (type && [MessageType.CriticalError, MessageType.Error].includes(type)) {
            return css`
                width: 97%;
                min-height: 80px;
            `;
        } else {
            return css`
                width: 65%;
                min-height: 62px;
            `;
        }
    }}

    display: flex;
    justify-content: space-between;

    z-index: 1000;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    ${({ type }) => {
        switch (type) {
            case MessageType.Info:
                return css`
                    background-color: ${deepSea};
                `;
            case MessageType.Error:
                return css`
                    background-color: ${carnation};
                `;
        }
    }}
`;

export const StyledMessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin: auto;
    color: ${white};
    font-weight: bold;
    white-space: break-spaces;
    text-align: center;
    line-height: 22px;
`;

export const StyledClearContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    color: ${white};
    cursor: pointer;
`;

export const StyledUnderlined = styled.div`
    text-decoration: underline;
    cursor: pointer;
`;
