/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { cartReducer, addProductToCart, deleteProductFromCart, clearSelectedCartProducts, clearCartProducts } from '.';

describe('Cart slice tests', () => {
    it('should handle adding a product to the cart', () => {
        const state = {
            serve: 0,
            cartProducts: {},
        };
        const payload = {
            productId: 1,
            quantity: 2,
        };
        const actual = cartReducer(state, addProductToCart(payload));
        const expected = {
            serve: 0,
            cartProducts: {
                1: 2,
            },
        };
        expect(actual).toEqual(expected);
    });

    it('should handle deleting a product from the cart', () => {
        const state = {
            serve: 0,
            cartProducts: {
                1: 2,
                2: 3,
            },
        };
        const actual = cartReducer(state, deleteProductFromCart(1));
        const expected = {
            serve: 0,
            cartProducts: {
                2: 3,
            },
        };
        expect(actual).toEqual(expected);
    });

    it('should handle clearing selected products from the cart', () => {
        const state = {
            serve: 0,
            cartProducts: {
                1: 2,
                2: 3,
                3: 4,
            },
        };
        const actual = cartReducer(state, clearSelectedCartProducts([1, 3]));
        const expected = {
            serve: 0,
            cartProducts: {
                2: 3,
            },
        };
        expect(actual).toEqual(expected);
    });

    it('should handle clearing all products from the cart', () => {
        const state = {
            serve: 0,
            cartProducts: {
                1: 2,
                2: 3,
                3: 4,
            },
        };
        const actual = cartReducer(state, clearCartProducts());
        const expected = {
            serve: 0,
            cartProducts: {},
        };
        expect(actual).toEqual(expected);
    });
});
