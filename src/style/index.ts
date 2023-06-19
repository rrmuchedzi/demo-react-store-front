/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { caribbeanGreen, mirage } from './color';

// Shared view max-width for containers.
export const VIEW_CONTAINER_MAX_WIDTH = 1140;

const StyledOverlay = styled.div`
    background: rgba(0, 0, 0, 0.6);
`;

/**
 * Returns css styling for a flex container.
 *
 * @param direction set the direction of the flexible items inside the container
 * @param justify property to align the items horizontally
 * @param align property to align the items vertically
 * @returns flex css styling properties
 */
export const flexContainerStyle = (
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'initial' | 'inherit',
    justify:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'initial'
        | 'inherit',
    align:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'stretch'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'initial'
        | 'inherit',
) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;

export const StyledButtonGroup = styled.div`
    ${flexContainerStyle('row', 'center', 'center')}

    a {
        width: calc(50% - 12px);

        &:not(:last-child) {
            margin-right: auto;
        }
    }
`;

export const StyledMainContainer = styled.main`
    min-height: 100vh;
    position: relative;
`;

export const StyledContentWrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 0 30px;
    max-width: ${VIEW_CONTAINER_MAX_WIDTH}px;
`;

export const StyledSectionContainer = styled.section`
    padding: 100px 0;
    position: relative;

    ${StyledContentWrapper}:not(:last-child) {
        margin-bottom: 60px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    font-size: 12px;
    font-weight: 600;
    color: ${mirage};
    transition: all 0.25s;
    text-transform: uppercase;

    &:hover {
        color: ${caribbeanGreen};
    }
`;

export const StyledProductsListLoader = styled.div<{ isLoadingAll: boolean }>`
    height: ${({ isLoadingAll }) => (isLoadingAll ? '40vh' : '100px')};
    ${flexContainerStyle('row', 'center', 'center')}
`;

export const StyledFullScreenOverlay = styled(StyledOverlay)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    z-index: 1000;
    align-items: center;
    justify-content: center;
`;
