/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import styled from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { buttercup, white } from '../../../style/color';

export const StyledRatingCounter = styled.span`
    font-size: 14px;
    font-weight: 700;
    margin-right: 5px;
    display: inline-block;
`;

export const StyledRatingContainer = styled.div`
    height: 32px;
    padding: 0 12px;
    color: ${white};
    width: fit-content;
    border-radius: 40px;
    background: ${buttercup};
    ${flexContainerStyle('row', 'center', 'center')};
`;
