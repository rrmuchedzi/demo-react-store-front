/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Provides selectors to the product redux store
 */

import { createSelector } from '@reduxjs/toolkit';
import { EXPLORE_PRODUCTS_LIMIT, SUGGESTED_PRODUCTS_LIMIT } from '../../api/ constants/products';
import { RootState } from '../../store';
import { shuffleProducts } from '../../tools/helper';

export const productStateSelector = (state: RootState) => state.product;

export const selectProductsCollection = createSelector([productStateSelector], ({ products }) => products);

export const selectExploreProducts = createSelector([productStateSelector], ({ products }) =>
    products.slice(0, EXPLORE_PRODUCTS_LIMIT),
);

export const selectProductDetails = (productId: number) =>
    createSelector([productStateSelector], ({ products }) => products.find(({ id }) => id === productId));

export const selectIsLoadingProducts = createSelector([productStateSelector], ({ isLoading }) => isLoading);

export const selectProductSuggestions = (excludedProductId: number, productCategory: string) =>
    createSelector([productStateSelector], ({ products }) => {
        return shuffleProducts(
            products.filter(({ category, id }) => productCategory !== category && id !== excludedProductId),
        ).slice(0, SUGGESTED_PRODUCTS_LIMIT);
    });

export const selectProductCategories = createSelector([productStateSelector], ({ categories }) => categories);
