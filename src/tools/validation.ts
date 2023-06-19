/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Validations helper functions for tests
 */

const productTypeKeys = ['id', 'title', 'price', 'description', 'category', 'image', 'rating'];
const productRatingKeys = ['rate', 'count'];

/**
 * Verifies that products from the the API (https://fakestoreapi.com) matches the expected result
 *
 * @param products collection from the api
 * @returns true if the result matches the expected type/interface
 */
export const verifyProducts = (products: any) => {
    // Ensure the provided response/resource is an array and is of expected type.
    return Array.isArray(products) && products.every((product) => verifyProduct(product));
};

/**
 * Verifies that a product from the the API (https://fakestoreapi.com) matches the expected result
 *
 * @param products collection from the api
 * @returns true if the result matches the expected type/interface
 */
const verifyProduct = (product: any) => {
    const productKeys = Object.keys(product);
    // Check rating keys
    const hasFoundRatingKeys = productRatingKeys.every(
        (key) => product.rating && Object.keys(product.rating).includes(key),
    );
    // Check remaining product keys
    const hasFoundInterfaceKeys = productTypeKeys.every((key) => productKeys.includes(key));

    return hasFoundRatingKeys && hasFoundInterfaceKeys;
};
