/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Store cart reducer, slice and actions.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '../../api/types/cart';

/**
 * https://fakestoreapi.com/docs provides cart products with two properties
 * ProductId - a unique identifier for the cart product
 * Quantity - being the number of units of a specific product
 *
 * By using the record, we can use the ProductId as key and the Quantity as value
 * To keep a unique set of entries avoiding duplicate product entries
 */
interface ICartState {
    serve: number;
    cartProducts: Record<number, number>;
}

const initialState: ICartState = {
    serve: 0,
    cartProducts: {},
};

// Create cart slice and define the reducers for adding/updating, deleting cart entries.
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(draft, { payload }: PayloadAction<CartProduct>) {
            const { productId, quantity } = payload;
            draft.cartProducts[productId] = quantity;
        },
        deleteProductFromCart(draft, { payload }: PayloadAction<number>) {
            // The payload is the unique product identifier
            delete draft.cartProducts[payload];
        },
        clearSelectedCartProducts(draft, { payload }: PayloadAction<number[]>) {
            for (const productId of payload) {
                // The payload is the unique product identifier
                delete draft.cartProducts[productId];
            }
        },
        clearCartProducts(draft) {
            // This will remove all products from the cart.
            draft.cartProducts = {};
        },
    },
});

export const cartReducer = cartSlice.reducer;

// Export cart actions
export const { addProductToCart, clearCartProducts, clearSelectedCartProducts, deleteProductFromCart } =
    cartSlice.actions;
