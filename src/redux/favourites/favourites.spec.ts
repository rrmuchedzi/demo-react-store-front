/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { addProductToFavorites, deleteProductFromFavorites, favoritesReducer } from '.';

describe('Favorites slice tests', () => {
    const initialState = {
        productIds: [],
    };

    it('should handle adding a product to favorites', () => {
        const actual = favoritesReducer(initialState, addProductToFavorites(1));
        const expected = {
            productIds: [1],
        };
        expect(actual).toEqual(expected);
    });

    it('should handle deleting a product from favorites', () => {
        const state = {
            productIds: [1],
        };
        const actual = favoritesReducer(state, deleteProductFromFavorites(1));
        const expected = {
            productIds: [],
        };
        expect(actual).toEqual(expected);
    });
});
