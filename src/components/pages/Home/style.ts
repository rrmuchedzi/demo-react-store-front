/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styled components provider for the home component
 */

import styled from 'styled-components';
import { StyledContentWrapper, flexContainerStyle } from '../../../style';
import { whiteLilac } from '../../../style/color';
import { NAVIGATION_HEIGHT } from '../../general/Navigation/style';
import { StyledAnchorButton } from '../../shared/Buttons/Anchor/style';

export const StyledHomeHeader = styled.header`
    min-height: 40vh;
    position: relative;
    margin-top: ${NAVIGATION_HEIGHT}px;

    ${StyledContentWrapper} {
        padding-top: 60px;
    }
`;

export const StyledHeroDetailsWrapper = styled.div`
    flex-shrink: 0;
    max-width: 480px;
    ${StyledAnchorButton} {
        margin-top: 30px;
    }
`;

export const StyledHeroImageWrapper = styled.div`
    img {
        width: 100%;
    }
    max-width: 480px;
    margin-left: auto;
    width: calc(100% - 500px);
`;

export const StyledHomeHeroContainer = styled.div`
    height: 500px;
    padding: 30px;
    border-radius: 32px;
    background: ${whiteLilac};
    ${flexContainerStyle('row', 'flex-start', 'center')};

    @media (max-width: 960px) {
        ${StyledHeroDetailsWrapper} {
            text-align: center;
            ${flexContainerStyle('column', 'center', 'center')};
        }

        ${StyledHeroImageWrapper} {
            width: 100%;
            margin-left: unset;
            margin-top: 40px;
        }

        height: fit-content;
        ${flexContainerStyle('column', 'center', 'center')};
    }

    @media (max-width: 560px) {
        ${StyledHomeHeader} {
            ${StyledContentWrapper} {
                padding-top: 40px;
            }
        }
    }
`;
