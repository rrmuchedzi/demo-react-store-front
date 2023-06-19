/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Product } from '../../api/types/product';
import { HttpMethod } from '../../api/utils/endpointSync';
import { endpointFetch } from '../../tools/fetch';

/**
 * Sends a request to the server to fetch available products.
 *
 * @returns a promise with collection of products
 */
export function getProducts(): Promise<Product[]> {
    return endpointFetch('https://fakestoreapi.com/products', HttpMethod.GET);
}

/**
 * Sends a request to the server to fetch available product categories.
 *
 * @returns a promise with collection of available categories
 */
export function getProductCategories(): Promise<string[]> {
    return endpointFetch('https://fakestoreapi.com/products/categories', HttpMethod.GET);
}
