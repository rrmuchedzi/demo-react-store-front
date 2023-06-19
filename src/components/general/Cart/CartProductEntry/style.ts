/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Cart product entry styling
 */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { flexContainerStyle } from '../../../../style';
import { manatee, white } from '../../../../style/color';
import { StyledIconButton } from '../../../shared/Buttons/IconButton/style';
import { StyledHeadingSix } from '../../../shared/Heading/style';

export const StyledCheckoutProductDetails = styled.div`
    overflow: hidden;
    width: calc(100% - 178px);
    ${flexContainerStyle('column', 'flex-start', 'flex-start')};

    ${StyledHeadingSix} {
        overflow: hidden;
        margin-bottom: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

export const StyledCartProductCellImage = styled(NavLink)`
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    display: block;
    overflow: hidden;
    position: relative;
    border-radius: 16px;
    background: ${white};
    border: 1px solid ${manatee};

    margin-right: 20px;

    img {
        top: 50%;
        left: 50%;
        width: 40px;
        height: auto;
        position: absolute;
        transform: translate(-50%, -50%);
    }
`;

export const StyledCartProductCellContainer = styled.li`
    position: relative;
    ${flexContainerStyle('row', 'flex-start', 'center')};

    ${StyledIconButton} {
        flex-shrink: 0;
        margin-left: auto;
    }
`;
