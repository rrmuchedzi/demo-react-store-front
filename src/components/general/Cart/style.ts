/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styled components provider for the cart tray
 */

import styled from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { manatee, mercury, white } from '../../../style/color';
import { StyledAnchorButton } from '../../shared/Buttons/Anchor/style';
import { StyledCartProductCellContainer } from './CartProductEntry/style';

export const StyledCartTrayProducts = styled.ul`
    width: 100%;
    padding: 16px;
    position: relative;

    ${StyledCartProductCellContainer} {
        margin-bottom: 16px;
    }
`;

export const StyledCartTrayTotal = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 12px;
    ${flexContainerStyle('row', 'space-between', 'center')};

    span {
        font-size: 20px;
        font-weight: 600;
        display: inline-block;
    }
`;

export const StyledCartTrayOptions = styled.div`
    bottom: 0;
    width: 100%;
    padding: 16px;
    margin-top: auto;
    position: sticky;
    background: ${white};
    border-top: 1px solid ${mercury};

    ${StyledAnchorButton} {
        width: calc(50% - 12px);
    }
`;

export const StyledCartServiceWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    ${flexContainerStyle('column', 'center', 'center')};

    svg {
        width: 200px;
        height: auto;
    }
`;

export const StyledCartTrayWrapper = styled.div`
    width: 420px;
    height: 460px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    ${flexContainerStyle('column', 'flex-start', 'flex-start')};
`;

export const StyledCartTrayContainer = styled.div`
    overflow: hidden;
    position: relative;
    background: ${white};
    border-radius: 12px;
    border: 1px solid ${manatee};
`;
