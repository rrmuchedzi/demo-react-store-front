/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import styled from 'styled-components';
import { flexContainerStyle } from '../../../../style';

export const StyledProductSuggestionsButton = styled.div`
    margin-top: 80px;
    position: relative;
    ${flexContainerStyle('row', 'center', 'center')};
`;

export const StyledProductSuggestionsContent = styled.div`
    display: grid;
    grid-gap: 30px;
    column-gap: 30px;
    margin-top: 30px;
    grid-template-columns: repeat(4, minmax(100px, 1fr));

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
    }
`;
