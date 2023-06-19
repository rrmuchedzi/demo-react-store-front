/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styling provider for button components
 */

import { css } from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { caribbeanGreen, carnation, deepSea, mercury, mirage, redOrange, white } from '../../../style/color';

export enum ButtonType {
    Primary = 'Primary',
    Light = 'Light',
    Secondary = 'Secondary',
    Danger = 'Danger',
}

export interface CommonButtonProps {
    disabled?: boolean;
    variation: ButtonType;
}

const StyledButtonBaseCss = css`
    height: 44px;
    cursor: pointer;
    font-size: 16px;
    padding: 0 16px;
    min-width: 160px;
    font-weight: 600;
    position: relative;
    width: fit-content;
    border-radius: 8px;
    transition: all 0.25s;
    ${flexContainerStyle('row', 'center', 'center')};

    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const StyledPrimaryButtonCss = css`
    ${StyledButtonBaseCss};
    color: ${white};
    background: ${caribbeanGreen};

    &:hover {
        background: ${deepSea};
    }
`;

export const StyledDangerButtonCss = css`
    ${StyledButtonBaseCss};
    color: ${white};
    background: ${carnation};

    &:hover {
        background: ${redOrange};
    }
`;

export const StyledSecondaryButtonCss = css`
    ${StyledButtonBaseCss};
    color: ${white};
    background: ${mirage};
`;

export const StyledLightButtonCss = css`
    ${StyledButtonBaseCss};
    color: ${mirage};
    background: ${white};
    border: 2px solid ${mercury};

    &:hover {
        border-color: ${mirage};
    }
`;
