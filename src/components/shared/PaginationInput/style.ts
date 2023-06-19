/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Pagination menu input controller.
 */

import styled, { css } from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { dodgerBlue, mercury, white } from '../../../style/color';

export const StyledPaginationInput = styled.div`
    height: 40px;
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    width: fit-content;
    background: ${dodgerBlue};
    ${flexContainerStyle('row', 'center', 'center')};
`;

export const StyledPaginationButton = styled.button<{ disabled: boolean }>`
    border: none;
    outline: none;
    color: ${white};
    cursor: pointer;
    background: ${dodgerBlue};

    width: 40px;
    height: 100%;
    ${flexContainerStyle('row', 'center', 'center')};

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.7;
            color: ${mercury};
            pointer-events: none;
        `}
`;

export const StyledPaginationCurrentPage = styled.div`
    width: 80px;
    height: 100%;
    color: ${white};
    font-size: 16px;
    font-weight: 600;
    border-left: 1px solid ${mercury};
    border-right: 1px solid ${mercury};
    ${flexContainerStyle('row', 'center', 'center')};
`;
