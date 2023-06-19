/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * This component is for displaying products in the cart as selected by the user.
 * The cart products are from the store.
 */

import { FC } from 'react';
import { transformToCurrency } from '../../../../tools/helper';
import { IconButton } from '../../../shared/Buttons/IconButton';
import { IconButtonTypes } from '../../../shared/Buttons/IconButton/style';
import { Paragraph } from '../../../shared/Paragraph';
import { Heading } from '../../../shared/Heading';
import { StyledCartProductCellContainer, StyledCartProductCellImage, StyledCheckoutProductDetails } from './style';
import { appRoutes } from '../../../../routes';

interface CartProductEntryProps {
    id: number;
    title: string;
    price: number;
    imageSrc: string;
    quantity: number;
    onDeleteCartProduct: () => void;
}

export const CartProductEntry: FC<CartProductEntryProps> = ({
    id,
    imageSrc,
    title,
    price,
    quantity,
    onDeleteCartProduct,
}) => {
    return (
        <StyledCartProductCellContainer>
            <StyledCartProductCellImage to={`${appRoutes.Products}/${id}`}>
                <img src={imageSrc} alt={title} />
            </StyledCartProductCellImage>

            <StyledCheckoutProductDetails>
                <Heading level={6}>{title}</Heading>
                <Paragraph>
                    {transformToCurrency(price)} {quantity > 1 && <span>X {quantity}</span>}
                </Paragraph>
            </StyledCheckoutProductDetails>

            <IconButton iconType={IconButtonTypes.Delete} onIconButtonClick={onDeleteCartProduct} />
        </StyledCartProductCellContainer>
    );
};
