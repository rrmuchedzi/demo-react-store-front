/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Provides redux actions for the cart store
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetUserCartResponse } from '../../api/types/cart';
import { getUserCart } from '../../fetch/cart';
import { captureException } from '../../tools/error';

export const getUserCartThunk = createAsyncThunk<GetUserCartResponse | undefined, number>(
    'products/get-products',
    async (cartId: number) => {
        try {
            return await getUserCart(cartId);
        } catch (err: unknown) {
            captureException(err);
            return;
        }
    },
);
