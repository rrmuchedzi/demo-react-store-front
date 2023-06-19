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

import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCart } from '../../../redux/cart';
import { selectCartProducts } from '../../../redux/cart/selector';
import { selectIsLoadingProducts } from '../../../redux/products/selector';
import { StyledButtonGroup } from '../../../style';
import { transformToCurrency } from '../../../tools/helper';
import { AnchorButton } from '../../shared/Buttons/Anchor';
import { ButtonType } from '../../shared/Buttons/style';
import { EmptyCart } from '../../shared/EmptyCart';
import { Loader } from '../../shared/Loader';
import { CartProductEntry } from './CartProductEntry';
import {
    StyledCartTrayContainer,
    StyledCartTrayOptions,
    StyledCartTrayTotal,
    StyledCartTrayProducts,
    StyledCartServiceWrapper,
    StyledCartTrayWrapper,
} from './style';

export const Cart: FC = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectCartProducts);
    const isLoadingProducts = useSelector(selectIsLoadingProducts);

    // Dispatches an action to delete a product from the cart.
    const handleOnDeleteCartProduct = (productId: number) => {
        dispatch(deleteProductFromCart(productId));
    };

    // Calculate the total price using useMemo, only when the products change.
    const totalPrice = useMemo(() => {
        return products
            .map(({ price, quantity }) => price * quantity)
            .reduce((initialPriceTotal, newPriceTotal) => initialPriceTotal + newPriceTotal, 0);
    }, [products]);

    return (
        <StyledCartTrayContainer>
            <StyledCartTrayWrapper>
                {!isLoadingProducts && products.length === 0 && <EmptyCart />}

                {!isLoadingProducts && products.length > 0 && (
                    <>
                        <StyledCartTrayProducts>
                            {products.filter(Boolean).map(({ image, price, title, id, quantity }, index) => (
                                <CartProductEntry
                                    id={id}
                                    title={title}
                                    price={price}
                                    imageSrc={image}
                                    quantity={quantity}
                                    key={`cart-product-${index}`}
                                    onDeleteCartProduct={() => handleOnDeleteCartProduct(id)}
                                />
                            ))}
                        </StyledCartTrayProducts>

                        <StyledCartTrayOptions>
                            <StyledCartTrayTotal>
                                <span>Total:</span>
                                <span>{transformToCurrency(totalPrice)}</span>
                            </StyledCartTrayTotal>
                            <StyledButtonGroup>
                                <AnchorButton label="Checkout" variation={ButtonType.Primary} path="/checkout" />
                                <AnchorButton label="Edit Cart" variation={ButtonType.Light} path="/checkout" />
                            </StyledButtonGroup>
                        </StyledCartTrayOptions>
                    </>
                )}

                {isLoadingProducts && (
                    <StyledCartServiceWrapper>
                        <Loader />
                    </StyledCartServiceWrapper>
                )}
            </StyledCartTrayWrapper>
        </StyledCartTrayContainer>
    );
};
