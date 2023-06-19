/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import styled, { css } from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { manatee, mercury, mirage, white, whiteLilac } from '../../../style/color';

export const StyledCounterInput = styled.input`
    width: 60px;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    color: ${mirage};
    text-align: center;
    outline: none;
    border: none;
    border-left: 1px solid ${mercury};
    border-right: 1px solid ${mercury};
`;

export const StyledCounterButton = styled.button<{ isRightAligned: boolean }>`
    top: 0;
    bottom: 0;
    z-index: 2;
    width: 40px;
    font-size: 0;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${manatee};
    position: absolute;
    background: ${white};
    transition: all 0.25s;
    ${flexContainerStyle('row', 'center', 'center')};

    ${({ isRightAligned }) => {
        return isRightAligned
            ? css`
                  right: 0;
              `
            : css`
                  left: 0;
              `;
    }}

    &:hover {
        color: ${mirage};
    }
`;

export const StyledCounterInputContainer = styled.div`
    height: 48px;
    padding: 0 40px;
    overflow: hidden;
    position: relative;
    width: fit-content;
    border-radius: 12px;
    background: ${white};
    border: 2px solid ${whiteLilac};
`;
