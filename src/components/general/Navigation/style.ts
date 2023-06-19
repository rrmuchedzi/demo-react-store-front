/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styled components provider for the navigation component
 */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { flexContainerStyle, VIEW_CONTAINER_MAX_WIDTH } from '../../../style';
import { heliotrope, manatee, mercury, mirage, white } from '../../../style/color';

// Shared navigation height
export let NAVIGATION_HEIGHT = 100;

export const StyledNavigationWrapper = styled.div`
    height: 100%;
    margin: auto;
    padding: 0 30px;
    position: relative;
    max-width: ${VIEW_CONTAINER_MAX_WIDTH}px;
    ${flexContainerStyle('row', 'flex-start', 'center')};
`;

export const StyledNavigationMenusGroup = styled.div`
    height: 100%;
    margin-left: 60px;
    position: relative;
    ${flexContainerStyle('row', 'flex-start', 'center')};
`;

export const StyledNavigationLogo = styled(NavLink)`
    position: relative;
    svg {
        width: auto;
        height: 45px;
    }
`;

export const StyledNavigationMenu = styled(NavLink)`
    display: flex;
    cursor: pointer;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 600;
    color: ${manatee};
    align-items: center;
    background: transparent;
    transition: color 0.25s;

    &:hover {
        color: ${mirage};
    }

    &:not(:last-child) {
        margin-right: 12px;
    }

    &.active {
        color: ${mirage};
    }
`;

export const StyledNavigationCartTray = styled.div`
    top: 100%;
    right: 0px;
    padding-top: 20px;
    position: absolute;
    transition: all 0.25s;

    opacity: 0;
    visibility: hidden;
`;

export const StyledNavigationMenuOption = styled.div`
    cursor: pointer;
    color: ${mirage};
    margin-left: auto;
    position: relative;

    &:not(:last-child) {
        margin-right: 24px;
    }

    &:hover ${StyledNavigationCartTray} {
        opacity: 1;
        visibility: visible;
    }
`;

export const StyledNavigationMenuOptions = styled.div`
    margin-left: auto;
    ${flexContainerStyle('row', 'flex-end', 'center')};
`;

export const StyledMenuNotifier = styled.span`
    width: 12px;
    height: 12px;
    display: block;
    border-radius: 30px;
    background: ${heliotrope};
    border: 2px solid ${white};

    top: -3px;
    right: -3px;
    position: absolute;
`;

export const StyledNavigation = styled.nav`
    top: 0;
    left: 0;
    z-index: 200;
    width: 100vw;
    position: fixed;
    background: ${white};
    height: ${NAVIGATION_HEIGHT}px;
    border-bottom: 1px solid ${mercury};

    @media (max-width: 560px) {
        ${(NAVIGATION_HEIGHT = 60)};

        height: ${NAVIGATION_HEIGHT}px;

        ${StyledNavigationLogo} {
            svg {
                height: 32px;
            }
        }

        ${StyledNavigationMenusGroup} {
            margin-left: 16px;
        }

        ${StyledNavigationMenu} {
            padding: 0;
            &:not(:last-child) {
                margin-right: 12px;
            }
        }
    }

    @media (max-width: 430px) {
        ${StyledNavigationLogo} {
            display: none;
        }
    }
`;
