/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * This component renders a single product in the cart.
 */

import { FC } from 'react';
import { MAX_PRODUCT_ORDER_COUNT } from '../../../../api/ constants/products';
import { transformToCurrency } from '../../../../tools/helper';
import { IconButton } from '../../../shared/Buttons/IconButton';
import { IconButtonTypes } from '../../../shared/Buttons/IconButton/style';
import { Checkbox } from '../../../shared/Checkbox';
import { CounterInput } from '../../../shared/CounterInput';
import { Heading } from '../../../shared/Heading';
import {
    StyledCheckoutProductContainer,
    StyledCheckoutProductDetails,
    StyledCheckoutProductImage,
    StyledCheckoutProductOptions,
    StyledCheckoutProductPrice,
} from './style';

interface CheckoutProductProps {
    title: string;
    price: number;
    quantity: number;
    imageSrc: string;
    isSelected: boolean;
    onDeleteProduct: () => void;
    onToggleIsSelected: () => void;
    onChangeQuantity: (value: number) => void;
}

export const CheckoutProduct: FC<CheckoutProductProps> = ({
    title,
    price,
    imageSrc,
    quantity,
    isSelected,
    onDeleteProduct,
    onChangeQuantity,
    onToggleIsSelected,
}) => {
    const handleOnChangeQuantity = (quantityUpdate: number) => {
        if (quantityUpdate > 0) {
            onChangeQuantity(quantityUpdate);
        }

        // TODO: Add logic here for removing the product at 0
    };
    return (
        <StyledCheckoutProductContainer>
            <Checkbox isChecked={isSelected} onToggleCheckbox={onToggleIsSelected} />

            <StyledCheckoutProductImage>
                <img src={imageSrc} alt={`${title} - product image`} />
            </StyledCheckoutProductImage>

            <StyledCheckoutProductDetails>
                <Heading level={6}>{title}</Heading>
                <StyledCheckoutProductPrice>
                    {transformToCurrency(price)} <span>X {quantity}</span>
                </StyledCheckoutProductPrice>
                <StyledCheckoutProductOptions>
                    <CounterInput
                        value={quantity}
                        min={0}
                        max={MAX_PRODUCT_ORDER_COUNT}
                        onChangeCounterValue={handleOnChangeQuantity}
                    />
                    <IconButton iconType={IconButtonTypes.Delete} onIconButtonClick={onDeleteProduct} />
                </StyledCheckoutProductOptions>
            </StyledCheckoutProductDetails>
        </StyledCheckoutProductContainer>
    );
};
