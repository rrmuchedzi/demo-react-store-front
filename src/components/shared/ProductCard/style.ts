/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { caribbeanGreen, mercury, mirage, white } from '../../../style/color';
import { StyledIconButton } from '../Buttons/IconButton/style';
import { StyledHeadingSix } from '../Heading/style';
import { StyledRatingContainer } from '../Rating/style';

export const StyledProductCardImage = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    border-radius: 16px;
    background: ${white};
    border: 1px solid ${mercury};

    width: 100%;
    padding: 20px;
    aspect-ratio: 1;

    img {
        top: 50%;
        left: 50%;
        z-index: 10;
        width: 140px;
        height: auto;
        max-height: 180px;
        position: absolute;
        transition: all 0.25s;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 480px) {
        img {
            width: 140px;
        }
    }
`;

export const StyledProductCardDetails = styled.div`
    padding: 0 8px;
    margin-top: 12px;

    .pricing {
        ${flexContainerStyle('row', 'flex-start', 'center')};

        ${StyledIconButton}:not(:last-child) {
            margin-right: 10px;
        }
    }

    ${StyledHeadingSix} {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: ${mirage};
    }
`;

export const StyledProductCategory = styled.div`
    font-size: 12px;
    margin-top: 4px;
    font-weight: 500;
    margin-bottom: 10px;
    color: ${caribbeanGreen};
`;

export const StyledInCartIndicator = styled.div`
    height: 40px;
    padding: 0 10px;
    font-size: 14px;
    color: ${white};
    font-weight: 600;
    width: fit-content;
    margin-right: 10px;
    border-radius: 40px;
    text-transform: uppercase;
    background: ${caribbeanGreen};
    ${flexContainerStyle('row', 'center', 'center')};
`;

export const StyledOutOfStockIndicator = styled.div`
    height: 40px;
    padding: 0 10px;
    font-size: 14px;
    color: ${mirage};
    font-weight: 600;
    width: fit-content;
    margin-right: 10px;
    border-radius: 40px;
    text-transform: uppercase;
    background: ${mercury};
    ${flexContainerStyle('row', 'center', 'center')};
`;

export const StyledProductCardPrice = styled.div`
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;
    color: ${mirage};
    margin-right: auto;
`;

export const StyledProductCard = styled(NavLink)`
    cursor: pointer;
    max-width: 480px;
    position: relative;
    display: inline-block;

    ${StyledRatingContainer} {
        top: 10px;
        right: 10px;
        z-index: 40;
        position: absolute;
        transition: all 0.25s;

        opacity: 0;
        visibility: hidden;
    }

    &:hover {
        ${StyledRatingContainer} {
            opacity: 1;
            visibility: visible;
        }

        ${StyledProductCardImage} {
            img {
                transform: translate(-50%, -50%) scale(1.1);
            }
        }
    }
`;
