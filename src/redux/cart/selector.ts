/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Provides selectors to the cart redux store
 */

import { createSelector } from '@reduxjs/toolkit';
import { CartProductPreview } from '../../api/types/cart';
import { RootState } from '../../store';
import { selectProductsCollection } from '../products/selector';

const cartStateSelector = (state: RootState) => state.cart;

const selectCartProductRecord = createSelector([cartStateSelector], ({ cartProducts }) => cartProducts);

export const selectIsProductInCart = (productId: number) =>
    createSelector([cartStateSelector], ({ cartProducts }) => cartProducts[productId] != null);

export const selectCartProducts = createSelector(
    [selectProductsCollection, selectCartProductRecord],
    (products, cartProductsRecord) => {
        const cartProductIds = Object.keys(cartProductsRecord).map((key) => parseInt(key, 10));

        // All products will be mapped to the CartProductPreview type which includes quantity.
        const cartProducts: CartProductPreview[] = [];
        for (const productId of cartProductIds) {
            const product = products.find(({ id }) => id === productId);
            if (product == null) {
                continue;
            }

            cartProducts.push({
                ...product,
                quantity: cartProductsRecord[productId],
            });
        }
        return cartProducts;
    },
);

export const selectHasProductsInCart = createSelector(
    [cartStateSelector],
    ({ cartProducts }) => Object.keys(cartProducts).length > 0,
);
