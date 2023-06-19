/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styling provider for the checkout product renderer.
 */

import styled from 'styled-components';
import { flexContainerStyle } from '../../../../style';
import { manatee, mercury, mirage, white, whiteLilac } from '../../../../style/color';
import { StyledCounterInputContainer } from '../../../shared/CounterInput/style';
import { StyledHeadingSix } from '../../../shared/Heading/style';

export const StyledCheckoutProductImage = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    background: ${white};
    border: 1px solid ${whiteLilac};

    width: 120px;
    height: 120px;
    flex-shrink: 0;
    margin-left: 20px;

    img {
        top: 50%;
        left: 50%;
        width: 60px;
        height: auto;
        position: absolute;
        transform: translate(-50%, -50%);
    }
`;

export const StyledCheckoutProductPrice = styled.span`
    display: block;
    font-size: 16px;
    color: ${mirage};
    font-weight: 600;
    margin-top: 10px;

    span {
        display: inline-block;
        color: ${manatee};
        margin-left: 10px;
        font-size: 14px;
    }
`;

export const StyledCheckoutProductOptions = styled.div`
    margin-top: 10px;
    position: relative;
    ${flexContainerStyle('row', 'flex-start', 'center')};

    ${StyledCounterInputContainer} {
        margin-right: 20px;
    }

    @media (max-width: 560px) {
        ${flexContainerStyle('column', 'center', 'flex-start')};

        ${StyledCounterInputContainer} {
            margin-right: unset;
            margin-bottom: 12px;
        }
    }
`;

export const StyledCheckoutProductDetails = styled.div`
    margin-left: 20px;
    position: relative;
    padding-left: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: calc(100% - 180px);
    ${flexContainerStyle('column', 'flex-start', 'flex-start')};

    ${StyledHeadingSix} {
        width: 100%;
        overflow: hidden;
        margin-bottom: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    @media (max-width: 560px) {
        padding: 0;
        width: calc(100% - 160px);
    }

    @media (max-width: 480px) {
        width: calc(100% - 120px);
    }
`;

export const StyledCheckoutProductContainer = styled.div`
    padding: 20px;
    border-radius: 12px;
    border: 1px solid ${mercury};
    ${flexContainerStyle('row', 'flex-start', 'center')};

    @media (max-width: 560px) {
        ${StyledCheckoutProductImage} {
            width: 100px;
            height: 100px;
            margin-left: 12px;

            img {
                width: 40px;
            }
        }
    }

    @media (max-width: 480px) {
        padding: 14px;
        ${StyledCheckoutProductImage} {
            width: 60px;
            height: 60px;
            margin-left: 12px;

            img { {
                width: 30px;
            }
        }

        ${StyledCheckoutProductDetails} {
            width: calc(100% - 120px);
        }
    }
`;
