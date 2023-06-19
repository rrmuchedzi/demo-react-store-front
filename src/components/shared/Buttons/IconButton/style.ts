/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styling provider for the icon buttons component
 */

import styled, { css } from 'styled-components';
import { flexContainerStyle } from '../../../../style';
import { caribbeanGreen, carnation, heliotrope, mercury, mirage, white } from '../../../../style/color';
import { UnreachableCaseError } from '../../../../tools/error';

export enum IconButtonTypes {
    Like = 'Like',
    Cart = 'Cart',
    Delete = 'Delete',
}

export const StyledIconButton = styled.button<{ size: number; active: boolean; iconType: IconButtonTypes }>`
    flex-shrink: 0;
    outline: none;
    cursor: pointer;
    color: ${mirage};
    position: relative;
    text-decoration: none;
    background: ${white};
    transition: all 0.25s;
    border: 2px solid ${mercury};
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: ${({ size }) => size}px;
    ${flexContainerStyle('column', 'center', 'center')};

    ${({ iconType, active }) => {
        switch (iconType) {
            case IconButtonTypes.Like:
                return active
                    ? css`
                          color: ${white};
                          background: ${heliotrope};
                          border-color: ${heliotrope};
                      `
                    : css`
                          &:hover {
                              color: ${heliotrope};
                              border-color: ${heliotrope};
                          }
                      `;
            case IconButtonTypes.Delete:
                return css`
                    &:hover {
                        color: ${carnation};
                        border-color: ${carnation};
                    }
                `;
            case IconButtonTypes.Cart:
                return css`
                    &:hover {
                        color: ${caribbeanGreen};
                        border-color: ${caribbeanGreen};
                    }
                `;
            default: {
                throw new UnreachableCaseError(iconType);
            }
        }
    }}
`;
