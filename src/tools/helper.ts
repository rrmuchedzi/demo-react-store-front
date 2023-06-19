/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Helper util function for the general application computations.
 */

import { ProductSortingOptions } from '../api/ constants/filter';
import { Product } from '../api/types/product';
import { UnreachableCaseError } from './error';

/**
 * Converts the provided number to a string in a currency format.
 * By default, this uses $ symbol. An example, input 4, result $4.00
 *
 * @param amount value to be transformed
 * @returns a string of the transformed currency
 */
export const transformToCurrency = (amount: number) => {
    return (
        '$' +
        Math.abs(amount)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    );
};

/**
 * Shuffles the provided products collection
 *
 * @param products The products array to shuffle
 * @returns Returns the new shuffled products array
 */
export const shuffleProducts = (products: Product[]) => {
    // The provided products collection should have 2 or more entries
    if (products.length < 2) {
        return [];
    }

    let shuffleIndex = -1;
    const lastIndex = length - 1;

    const shuffledProducts = [...products];
    while (++shuffleIndex < length) {
        // Get random product index;
        const randomIndex = shuffleIndex + Math.floor(Math.random() * (lastIndex - shuffleIndex + 1));
        // Keep track reference to the product
        const productEntry = shuffledProducts[randomIndex];

        // Swap positions in the shuffled products
        shuffledProducts[randomIndex] = shuffledProducts[shuffleIndex];
        shuffledProducts[shuffleIndex] = productEntry;
    }
    return shuffledProducts;
};

/**
 * Splits the products collection into multiple chunks
 *
 * @param products The products array to split
 * @param size The size of each chunk
 */
export const splitProducts = (products: Product[], size: number): Product[][] => {
    const collectionLength = products == null ? 0 : products.length;
    if (!collectionLength || size < 1) {
        return [];
    }

    let chunkIterationIndex = 0;
    let resultIndex = 0;
    const result = new Array(Math.ceil(collectionLength / size));

    while (chunkIterationIndex < collectionLength) {
        result[resultIndex++] = products.slice(chunkIterationIndex, (chunkIterationIndex += size));
    }
    return result;
};

/**
 * Sorts the provided collection of products using the specified sort operation
 *
 * @param products The products to sort
 * @param operation The sort operation
 * @returns Sorted products collection
 */
export const sortProducts = (products: Product[], operation: ProductSortingOptions) => {
    switch (operation) {
        case ProductSortingOptions.Acs: {
            return products.sort((firstProduct, secondProduct) => firstProduct.id - secondProduct.id);
        }
        case ProductSortingOptions.Dcs: {
            return products.sort((firstProduct, secondProduct) => secondProduct.id - firstProduct.id);
        }
        case ProductSortingOptions.PriceLow: {
            return products.sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price);
        }
        case ProductSortingOptions.PriceHigh: {
            return products.sort((firstProduct, secondProduct) => secondProduct.price - firstProduct.price);
        }
        default: {
            throw new UnreachableCaseError('Unrecognized sorting operation for products');
        }
    }
};
