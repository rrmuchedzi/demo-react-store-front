/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styled components provider for the products component
 */

import styled from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { dodgerBlue, manatee, mercury } from '../../../style/color';
import { NAVIGATION_HEIGHT } from '../../general/Navigation/style';
import { StyledButton } from '../../shared/Buttons/Button/style';
import { StyledCounterInput, StyledCounterInputContainer } from '../../shared/CounterInput/style';
import { StyledRatingContainer } from '../../shared/Rating/style';
import { StyledSectionStage } from '../../shared/SectionStage/style';
import { StyledSelectInputContainer } from '../../shared/SelectInput/style';

export const StyledProductsListContainer = styled.div`
    display: grid;
    grid-gap: 40px;
    column-gap: 40px;
    margin-top: 40px;
    min-height: 60vh;
    grid-template-columns: repeat(3, minmax(100px, 1fr));

    @media (max-width: 960px) {
        grid-template-columns: repeat(3, minmax(100px, 1fr));
    }

    @media (max-width: 780px) {
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
    }
`;

export const StyledProductsFilterContainer = styled.div`
    margin-top: 80px;
    ${flexContainerStyle('row', 'flex-end', 'center')}

    ${StyledSelectInputContainer}:not(:last-child) {
        margin-right: 20px;
    }

    @media (max-width: 560px) {
        margin-top: 40px;
    }

    @media (max-width: 480px) {
        ${flexContainerStyle('row', 'space-between', 'center')}
    }
`;

export const StyledProductsContainer = styled.section`
    position: relative;
    padding-bottom: 100px;
    padding-top: ${NAVIGATION_HEIGHT}px;
`;

export const StyledProductDetailsImage = styled.div`
    position: relative;
    padding-top: 40px;
    aspect-ratio: 1;
    max-width: 480px;
    width: calc(100% - 580px);

    overflow: hidden;
    border-radius: 24px;
    border: 1px solid ${manatee};

    img {
        top: 50%;
        left: 50%;
        z-index: 10;
        height: auto;
        max-width: 300px;
        position: absolute;
        width: calc(100% - 100px);
        transform: translate(-50%, -50%);
    }

    ${StyledRatingContainer} {
        top: 20px;
        right: 20px;
        z-index: 20;
        position: absolute;
    }

    @media (max-width: 1260px) {
        img {
            max-width: 280px;
        }
        min-height: 560px;
    }

    @media (max-width: 960px) {
        width: 100%;
        min-height: unset;
    }
`;

export const StyledProductInformationWrapper = styled.div`
    position: relative;
    padding-top: 40px;
    max-width: 480px;
    margin-left: auto;
    flex-shrink: 0;

    ${StyledSectionStage} {
        margin-bottom: 30px;
        display: inline-block;
    }

    .pricing-category-content {
        margin-top: 30px;
        ${flexContainerStyle('row', 'flex-start', 'center')};

        .product-pricing {
            font-size: 32px;
            margin-left: 40px;
            font-weight: 700;
        }
    }

    .pricing-description-content {
        margin-top: 30px;
    }

    .product-details-cart-options {
        margin-top: 40px;
        ${flexContainerStyle('row', 'flex-start', 'center')};

        ${StyledButton} {
            margin-left: auto;
            width: calc(100% - 200px);
        }

        @media (max-width: 480px) {
            ${flexContainerStyle('column', 'center', 'center')};

            ${StyledButton} {
                width: 100%;
            }

            ${StyledCounterInputContainer} {
                width: 100%;
                margin-bottom: 20px;

                ${StyledCounterInput} {
                    width: 100%;
                }
            }
        }
    }

    .product-details-proceed-to-checkout {
        margin-top: 40px;
        a {
            width: 100%;
        }

        @media (max-width: 480px) {
            margin-top: 20px;
        }
    }

    @media (max-width: 960px) {
        width: 100%;
        margin-left: 0;
        margin-top: 30px;
    }
`;

export const StyledProductDetailsHeader = styled.div`
    padding-top: 60px;
    position: relative;
    ${flexContainerStyle('row', 'flex-start', 'flex-start')};

    @media (max-width: 960px) {
        ${flexContainerStyle('column', 'center', 'center')};
    }
`;

export const StyledProductsPagination = styled.div`
    position: relative;
    margin-top: 60px;
    ${flexContainerStyle('row', 'flex-end', 'center')};
`;

export const StyledProductOutOfStock = styled.div`
    height: 60px;
    font-weight: 600;
    margin-top: 40px;
    border-radius: 8px;
    background: ${mercury};
    ${flexContainerStyle('row', 'center', 'center')};
`;

export const StyledResetFilters = styled.button`
    border: none;
    outline: none;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
    color: ${dodgerBlue};
    background: transparent;
    ${flexContainerStyle('row', 'center', 'center')};

    svg {
        margin-left: 10px;
    }
`;

export const StyledProductAdditionalInfo = styled.div`
    display: block;
    padding: 20px 0;
    margin-top: 30px;
    font-weight: 600;
    color: ${dodgerBlue};
    border-top: 1px solid ${mercury};
    border-bottom: 1px solid ${mercury};

    ${flexContainerStyle('row', 'flex-start', 'center')};

    button {
        margin-left: auto;
    }
`;

export const StyledResetFilterContainer = styled.div`
    height: 40px;
    position: relative;
    ${flexContainerStyle('row', 'flex-end', 'center')};
`;
