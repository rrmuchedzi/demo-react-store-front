/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Icon button component for showing simplified icon buttons that
 * can be used for adding products to cart, deleting and liking products.
 */

import React, { FC } from 'react';
import { IconButtonTypes, StyledIconButton } from './style';
import { ShoppingCartPlus, Heart, Trash } from 'tabler-icons-react';

export interface IconButtonProps {
    size?: number;
    active?: boolean;
    className?: string;
    iconType: IconButtonTypes;
    onIconButtonClick: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
    iconType,
    size = 48,
    className,
    active = false,
    onIconButtonClick,
}) => {
    const handleIconButtonClick = (event: React.MouseEvent) => {
        // When you using icon buttons, this prevents click events
        // from propagating.
        event.preventDefault();
        onIconButtonClick();
    };

    return (
        <StyledIconButton
            size={size}
            type="button"
            className={className}
            active={active}
            iconType={iconType}
            onClick={handleIconButtonClick}
        >
            {iconType === IconButtonTypes.Like && <Heart size={size / 2} />}
            {iconType === IconButtonTypes.Cart && <ShoppingCartPlus size={size / 2} />}
            {iconType === IconButtonTypes.Delete && <Trash size={size / 2} />}
        </StyledIconButton>
    );
};
