/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import styled from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { athensGray } from '../../../style/color';

export const StyledFooter = styled.footer`
    position: relative;
    padding-top: 60px;
    padding-bottom: 40px;
    background: ${athensGray};
`;

export const StyledFooterLogo = styled.div`
    position: relative;
    svg {
        width: auto;
        height: 45px;
    }
`;

export const StyledFooterMenu = styled.li`
    &:not(:last-child) {
        margin-right: 30px;
    }
`;

export const StyledFooterMenuOptions = styled.ul`
    width: 100%;
    margin-top: 40px;
    position: relative;
    padding-bottom: 30px;
    ${flexContainerStyle('row', 'center', 'center')};
`;

export const StyledFooterContentWrapper = styled.div`
    ${flexContainerStyle('column', 'center', 'center')};
`;

export const StyledFooterCopyright = styled.div`
    height: 40px;
    font-size: 12px;
    ${flexContainerStyle('column', 'center', 'center')};
`;
