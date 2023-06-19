/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styling for confirmation modal
 */

import styled from 'styled-components';
import { StyledButtonGroup } from '../../../style';

export const StyledConfirmModalDialog = styled.div`
    background-color: white;
    padding: 30px 40px;
    text-align: center;
    max-width: 420px;
    border-radius: 12px;

    ${StyledButtonGroup} {
        margin-top: 20px;

        button:first-child {
            margin-right: auto;
        }
    }

    p {
        margin-top: 20px;
    }
`;

export const StyledConfirmModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
