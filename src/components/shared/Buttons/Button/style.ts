/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styling provider for anchor button component
 */

import styled, { css } from 'styled-components';
import {
    ButtonType,
    StyledDangerButtonCss,
    StyledLightButtonCss,
    StyledPrimaryButtonCss,
    StyledSecondaryButtonCss,
} from '../style';

export const StyledButton = styled.button<{ disabled: boolean; variation: ButtonType }>`
    border: none;
    outline: none;
    position: relative;
    text-decoration: none;

    ${({ variation }) => {
        switch (variation) {
            case ButtonType.Primary: {
                return StyledPrimaryButtonCss;
            }
            case ButtonType.Secondary: {
                return StyledSecondaryButtonCss;
            }
            case ButtonType.Light: {
                return StyledLightButtonCss;
            }
            case ButtonType.Danger: {
                return StyledDangerButtonCss;
            }
        }
    }}

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.7;
            cursor: not-allowed;
        `}
`;
