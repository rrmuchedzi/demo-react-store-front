/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Provides selectors to the favorites redux store
 */

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const favoritesStateSelector = (state: RootState) => state.favorites;

export const selectIsFavoriteProduct = (productId: number) =>
    createSelector([favoritesStateSelector], ({ productIds }) => productIds.includes(productId));
