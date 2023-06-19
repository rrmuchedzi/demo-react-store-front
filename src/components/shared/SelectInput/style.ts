/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styled components provider for the select input.
 */

import styled, { css } from 'styled-components';
import { flexContainerStyle } from '../../../style';
import { caribbeanGreen, manatee, mercury, mirage, white } from '../../../style/color';

const commonListingStyling = css`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
    text-overflow: ellipsis;

    font-size: 14px;
    font-weight: 600;
    text-align: left;
    line-height: 32px;
    padding-right: 12px;
    display: block;
`;

export const StyledSelectCurrentOption = styled.span`
    position: relative;
    color: ${mirage};
    ${commonListingStyling};
`;

export const StyledSelectInputOption = styled.li<{ isSelected: boolean }>`
    height: 40px;
    cursor: pointer;
    position: relative;
    background: transparent;
    transition: color 0.25s;
    ${commonListingStyling};
    ${flexContainerStyle('row', 'flex-start', 'center')};

    &:not(:last-child) {
        margin-bottom: 12px;
    }

    &:hover {
        color: ${caribbeanGreen};
    }

    ${({ isSelected }) =>
        isSelected
            ? css`
                  color: ${caribbeanGreen};
              `
            : css`
                  color: ${manatee};
              `}
`;

export const StyledSelectInputList = styled.ul`
    left: -2px !important;
    right: -2px !important;
    padding: 0 12px 16px 12px;
    border-radius: 0 0 12px 12px;
    border-width: 0 2px 2px;
    border-style: solid;
    border-color: ${mercury};
    box-shadow: none;
    margin-top: 0;
    transform: none;
    transition: all 0.2s;
    position: absolute;
    top: 100%;
    overflow: hidden;
    background: ${white};
    visibility: hidden;
    opacity: 0;
    text-transform: capitalize;
`;

export const StyledSelectInputField = styled.button<{ isActive: boolean }>`
    width: 220px;
    height: 48px;
    padding: 0 22px;
    border-radius: 12px;
    border: 2px solid ${mercury};
    line-height: 60px;
    font-size: 14px;
    font-weight: 600;
    color: ${mirage};
    transition: all 0.25s;
    position: relative;
    user-select: none;
    white-space: nowrap;
    background: ${white};
    cursor: pointer;
    outline: none;
    z-index: 100;
    text-transform: capitalize;
    ${flexContainerStyle('row', 'space-between', 'center')};

    svg {
        flex-shrink: 0;
    }

    ${({ isActive }) =>
        isActive &&
        css`
            border-radius: 12px 12px 0 0;
            border-bottom-color: transparent;

            ${StyledSelectInputList} {
                opacity: 1;
                visibility: visible;
            }
        `}
`;

export const StyledSelectInputContainer = styled.div`
    min-height: 64px;

    @media (max-width: 560px) {
        ${StyledSelectInputField} {
            width: 100%;
            padding: 0 12px;
        }
        width: calc(50% - 10px);
    }
`;
