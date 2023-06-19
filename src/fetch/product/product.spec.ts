/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { getProducts } from '.';
import { verifyProducts } from '../../tools/validation';

describe('Products fetch API tests', () => {
    it('should be able to fetch products successfully', async () => {
        const products = await getProducts();
        // Check the result to ensure if has results
        expect(products.length).toBeGreaterThan(0);

        // Ensure all the products are of the expected type
        expect(verifyProducts(products)).toBeTruthy();
    });
});
