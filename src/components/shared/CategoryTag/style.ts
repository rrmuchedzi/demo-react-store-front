/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import styled from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { whiteIce, caribbeanGreen } from '../../../style/color';

export const StyledCategoryTag = styled.div`
    height: 32px;
    padding: 0 16px;
    font-size: 12px;
    font-weight: 700;
    width: fit-content;
    border-radius: 24px;
    text-transform: uppercase;

    background: ${whiteIce};
    color: ${caribbeanGreen};
    ${flexContainerStyle('row', 'center', 'center')};
`;
