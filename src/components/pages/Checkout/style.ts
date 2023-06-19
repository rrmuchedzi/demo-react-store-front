/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styling provider for the checkout page.
 */

import styled, { css } from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { manatee, mercury, mirage } from '../../../style/color';
import { NAVIGATION_HEIGHT } from '../../general/Navigation/style';
import { StyledButton } from '../../shared/Buttons/Button/style';
import { StyledCheckoutProductContainer } from './CheckoutProduct/style';

const StyledCheckoutSummaryStyling = css`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
`;

export const StyledCheckoutTitle = styled.div``;

export const StyledClearCartOption = styled.div`
    margin-left: auto;
    ${flexContainerStyle('row', 'flex-end', 'center')};

    button:first-child {
        margin-right: 20px;
    }
`;

export const StyledCheckoutHeader = styled.div`
    margin-top: 60px;
    ${flexContainerStyle('row', 'flex-start', 'center')};

    @media (max-width: 730px) {
        text-align: center;
        ${flexContainerStyle('column', 'center', 'center')};

        ${StyledClearCartOption} {
            margin-top: 40px;
            margin-left: unset;
        }
    }
`;

export const StyledCheckoutContainer = styled.div`
    position: relative;
    padding-top: ${NAVIGATION_HEIGHT}px;
`;

export const StyledCheckoutProducts = styled.div`
    min-height: 400px;
    position: relative;
    max-width: 600px;
    width: calc(100% - 480px);

    ${StyledCheckoutProductContainer}:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const StyledCheckoutSummaryTitle = styled.span`
    color: ${manatee};
    ${StyledCheckoutSummaryStyling};
`;

export const StyledCheckoutSummaryValue = styled.span`
    color: ${mirage};
    margin-left: auto;
    ${StyledCheckoutSummaryStyling};
`;

export const StyledCheckoutSummaryCell = styled.div`
    padding: 16px 0;
    position: relative;
    ${flexContainerStyle('row', 'flex-start', 'center')};
`;

export const StyledCheckoutSummary = styled.div`
    top: 0;
    width: 400px;
    padding: 24px;
    max-width: 600px;
    position: sticky;
    margin-left: auto;
    border-radius: 12px;
    border: 1px solid ${mercury};

    ${StyledButton} {
        width: 100%;
        margin-top: 20px;
    }
`;

export const StyledCheckoutContentWrapper = styled.div`
    margin-top: 40px;
    position: relative;
    padding-bottom: 100px;
    ${flexContainerStyle('row', 'flex-start', 'flex-start')};

    @media (max-width: 1020px) {
        ${flexContainerStyle('column', 'center', 'center')};

        ${StyledCheckoutProducts},
        ${StyledCheckoutSummary} {
            width: 100%;
        }

        ${StyledCheckoutSummary} {
            margin-left: unset;
            margin-top: 40px;
        }
    }
`;
