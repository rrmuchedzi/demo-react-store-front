/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { productReducer } from '.';
import { ALL_PRODUCTS_CATEGORY } from '../../api/ constants/products';
import { Product } from '../../api/types/product';
import { getProductCategoriesThunk, getProductsThunk } from './thunk';

describe('Products slice tests', () => {
    it('should handle loading products successfully', () => {
        const state = {
            products: [],
            categories: [],
            isLoading: true,
            hasLoadingProductsError: false,
        };
        const payload: Product[] = [
            {
                id: 1,
                title: 'Product 1',
                price: 10,
                description: 'Description 1',
                category: 'Category 1',
                image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                rating: {
                    rate: 3,
                    count: 2,
                },
            },
            {
                id: 2,
                title: 'Product 2',
                price: 120,
                description: 'Description 2',
                category: 'Category 1',
                image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                rating: {
                    rate: 2,
                    count: 20,
                },
            },
        ];

        const action = getProductsThunk.fulfilled(payload, '', undefined);
        const actual = productReducer(state, action);
        const expected = {
            products: [
                {
                    id: 1,
                    title: 'Product 1',
                    price: 10,
                    description: 'Description 1',
                    category: 'Category 1',
                    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                    rating: {
                        rate: 3,
                        count: 2,
                    },
                },
                {
                    id: 2,
                    title: 'Product 2',
                    price: 120,
                    description: 'Description 2',
                    category: 'Category 1',
                    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                    rating: {
                        rate: 2,
                        count: 20,
                    },
                },
            ],
            categories: [],
            isLoading: false,
            hasLoadingProductsError: false,
            lastProductId: 2,
        };
        expect(actual).toEqual(expected);
    });

    it('should handle loading products unsuccessfully', () => {
        const state = {
            products: [],
            categories: [],
            isLoading: true,
            hasLoadingProductsError: false,
        };
        const actual = productReducer(state, getProductsThunk.rejected(new Error('rejected'), '', undefined));
        const expected = {
            products: [],
            categories: [],
            isLoading: false,
            hasLoadingProductsError: true,
        };
        expect(actual).toEqual(expected);
    });

    it('should handle loading product categories successfully', () => {
        const state = {
            products: [],
            categories: [],
            isLoading: false,
            hasLoadingProductsError: false,
        };
        const payload = ['Category A', 'Category B'];
        const actual = productReducer(state, getProductCategoriesThunk.fulfilled(payload, '', undefined));
        const expected = {
            products: [],
            categories: [ALL_PRODUCTS_CATEGORY, 'Category A', 'Category B'],
            isLoading: false,
            hasLoadingProductsError: false,
        };
        expect(actual).toEqual(expected);
    });
});
