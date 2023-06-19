/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styled components provider for the fallback component
 */

import styled from 'styled-components';
import { flexContainerStyle, StyledContentWrapper } from '../../../style';
import { NAVIGATION_HEIGHT } from '../../general/Navigation/style';
import { StyledAnchorButton } from '../../shared/Buttons/Anchor/style';

export const StyledFallback = styled.section`
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 40px;
    padding-top: ${NAVIGATION_HEIGHT}px;
    ${flexContainerStyle('row', 'center', 'center')};
    svg {
        width: 480px;
        height: auto;
    }

    ${StyledAnchorButton} {
        width: 480px;
        margin-top: 30px;
    }

    ${StyledContentWrapper} {
        ${flexContainerStyle('column', 'center', 'center')};
    }

    @media (max-height: 900px) {
        svg {
            width: 320px;
        }
    }

    @media (max-width: 480px) {
        svg,
        ${StyledAnchorButton} {
            width: 100%;
        }
    }
`;
