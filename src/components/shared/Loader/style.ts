/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styling for the app loader.
 */

import styled, { keyframes } from 'styled-components';
import { mirage } from '../../../style/color';

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const StyledLoader = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    border-top: 3px solid ${mirage};
    border-right: 3px solid transparent;
    animation: ${rotation} 1s linear infinite;
`;
