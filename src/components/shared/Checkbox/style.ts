/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styling provider for the checkout product renderer.
 */

import styled, { css } from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { caribbeanGreen, mercury, whiteLilac } from '../../../style/color';

export const StyledCheckbox = styled.button<{ isChecked: boolean; disabled: boolean }>`
    border: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background: transparent;
    ${flexContainerStyle('row', 'center', 'center')};

    ${({ isChecked }) =>
        isChecked
            ? css`
                  color: ${caribbeanGreen};
              `
            : css`
                  color: ${mercury};
              `}

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            pointer-events: none;
            color: ${whiteLilac};
        `}
`;
