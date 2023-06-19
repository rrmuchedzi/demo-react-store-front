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

export const StyledEmptyCartPlaceholderWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    ${flexContainerStyle('column', 'center', 'center')};

    svg {
        width: 200px;
        height: auto;
    }
`;
