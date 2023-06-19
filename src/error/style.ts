/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import styled from 'styled-components';
import { caribbeanGreen, white } from '../style/color';

export const ErrorBoundaryContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${white};
`;

export const ErrorBoundaryWrapper = styled.div`
    display: flex;
    padding: 0 20px;
    max-width: 600px;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a {
        color: ${caribbeanGreen};
    }
`;
