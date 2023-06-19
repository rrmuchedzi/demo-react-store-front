/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Provides redux actions for the products store
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../api/types/product';
import { getProductCategories, getProducts } from '../../fetch/product';
import { captureException } from '../../tools/error';
import { setErrorMessage } from '../message';

export const getProductsThunk = createAsyncThunk<Product[] | undefined, void>(
    'products/get-products',
    async (_, { dispatch }) => {
        try {
            const products = await getProducts();
            // Fetch available categories from the api
            dispatch(getProductCategoriesThunk());
            return products;
        } catch (err: unknown) {
            dispatch(
                setErrorMessage(
                    'Failed to fetch products from server. Please try again later or README file for troubleshooting',
                ),
            );
            captureException(err);
            return;
        }
    },
);

export const getProductCategoriesThunk = createAsyncThunk<string[] | undefined, void>(
    'products/get-product-categories',
    async () => {
        try {
            return await getProductCategories();
        } catch (err: unknown) {
            captureException(err);
            return;
        }
    },
);
