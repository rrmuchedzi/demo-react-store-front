/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { GetUserCartResponse } from '../../api/types/cart';
import { HttpMethod } from '../../api/utils/endpointSync';
import { endpointFetch } from '../../tools/fetch';

/**
 * Sends a request to the server to fetch a user cart.
 *
 * @param cartId unique user cart identification number
 * @returns a promise with collection of products
 */
export function getUserCart(cartId: number): Promise<GetUserCartResponse> {
    return endpointFetch(`https://fakestoreapi.com/carts/${cartId}`, HttpMethod.GET);
}
