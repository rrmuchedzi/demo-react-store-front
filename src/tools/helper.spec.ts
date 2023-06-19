/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { ProductSortingOptions } from '../api/ constants/filter';
import { Product } from '../api/types/product';
import { shuffleProducts, sortProducts, splitProducts, transformToCurrency } from './helper';

describe('Sorting products tests', () => {
    const products = [
        {
            id: 1,
            title: 'Product 1',
            price: 10,
            description: 'Description 1',
            category: 'Category 1',
            image: 'Image 1',
            rating: {
                rate: 4.5,
                count: 10,
            },
        },
        {
            id: 2,
            title: 'Product 2',
            price: 20,
            description: 'Description 2',
            category: 'Category 2',
            image: 'Image 2',
            rating: {
                rate: 3.5,
                count: 5,
            },
        },
        {
            id: 3,
            title: 'Product 3',
            price: 15,
            description: 'Description 3',
            category: 'Category 3',
            image: 'Image 3',
            rating: {
                rate: 4.0,
                count: 8,
            },
        },
    ];

    it('should sort products in ascending order by id', () => {
        const result = sortProducts(products, ProductSortingOptions.Acs);
        expect(result).toEqual([
            {
                id: 1,
                title: 'Product 1',
                price: 10,
                description: 'Description 1',
                category: 'Category 1',
                image: 'Image 1',
                rating: {
                    rate: 4.5,
                    count: 10,
                },
            },
            {
                id: 2,
                title: 'Product 2',
                price: 20,
                description: 'Description 2',
                category: 'Category 2',
                image: 'Image 2',
                rating: {
                    rate: 3.5,
                    count: 5,
                },
            },
            {
                id: 3,
                title: 'Product 3',
                price: 15,
                description: 'Description 3',
                category: 'Category 3',
                image: 'Image 3',
                rating: {
                    rate: 4.0,
                    count: 8,
                },
            },
        ]);
    });

    it('should sort products in descending order by id', () => {
        const result = sortProducts(products, ProductSortingOptions.Dcs);
        expect(result).toEqual([
            {
                id: 3,
                title: 'Product 3',
                price: 15,
                description: 'Description 3',
                category: 'Category 3',
                image: 'Image 3',
                rating: {
                    rate: 4.0,
                    count: 8,
                },
            },
            {
                id: 2,
                title: 'Product 2',
                price: 20,
                description: 'Description 2',
                category: 'Category 2',
                image: 'Image 2',
                rating: {
                    rate: 3.5,
                    count: 5,
                },
            },
            {
                id: 1,
                title: 'Product 1',
                price: 10,
                description: 'Description 1',
                category: 'Category 1',
                image: 'Image 1',
                rating: {
                    rate: 4.5,
                    count: 10,
                },
            },
        ]);
    });

    it('should sort products in from high to low by price', () => {
        const result = sortProducts(products, ProductSortingOptions.PriceHigh);
        expect(result).toEqual([
            {
                id: 2,
                title: 'Product 2',
                price: 20,
                description: 'Description 2',
                category: 'Category 2',
                image: 'Image 2',
                rating: {
                    rate: 3.5,
                    count: 5,
                },
            },
            {
                id: 3,
                title: 'Product 3',
                price: 15,
                description: 'Description 3',
                category: 'Category 3',
                image: 'Image 3',
                rating: {
                    rate: 4.0,
                    count: 8,
                },
            },

            {
                id: 1,
                title: 'Product 1',
                price: 10,
                description: 'Description 1',
                category: 'Category 1',
                image: 'Image 1',
                rating: {
                    rate: 4.5,
                    count: 10,
                },
            },
        ]);
    });

    it('should sort products in from low to high by price', () => {
        const result = sortProducts(products, ProductSortingOptions.PriceLow);
        expect(result).toEqual([
            {
                id: 1,
                title: 'Product 1',
                price: 10,
                description: 'Description 1',
                category: 'Category 1',
                image: 'Image 1',
                rating: {
                    rate: 4.5,
                    count: 10,
                },
            },
            {
                id: 3,
                title: 'Product 3',
                price: 15,
                description: 'Description 3',
                category: 'Category 3',
                image: 'Image 3',
                rating: {
                    rate: 4.0,
                    count: 8,
                },
            },
            {
                id: 2,
                title: 'Product 2',
                price: 20,
                description: 'Description 2',
                category: 'Category 2',
                image: 'Image 2',
                rating: {
                    rate: 3.5,
                    count: 5,
                },
            },
        ]);
    });
});

describe('Currency transform tests', () => {
    it('should transform number to currency format with dollar sign and 2 decimal places', () => {
        const result = transformToCurrency(1234.5678);
        expect(result).toBe('$1,234.57');
    });

    it('should transform single digit number to currency format', () => {
        const result = transformToCurrency(5);
        expect(result).toBe('$5.00');
    });

    it('should transform negative number to currency format with dollar sign and 2 decimal places', () => {
        const result = transformToCurrency(-1234.5678);
        expect(result).toBe('$1,234.57');
    });

    it('should transform large number to currency format with comma separators', () => {
        const result = transformToCurrency(123456789.123456789);
        expect(result).toBe('$123,456,789.12');
    });
});

describe('Split products tests', () => {
    const products: Product[] = [
        {
            id: 1,
            title: 'Product 1',
            price: 10,
            description: 'Description 1',
            category: 'Category 1',
            image: 'Image 1',
            rating: {
                rate: 4.5,
                count: 10,
            },
        },
        {
            id: 2,
            title: 'Product 2',
            price: 20,
            description: 'Description 2',
            category: 'Category 2',
            image: 'Image 2',
            rating: {
                rate: 3.5,
                count: 5,
            },
        },
        {
            id: 3,
            title: 'Product 3',
            price: 15,
            description: 'Description 3',
            category: 'Category 3',
            image: 'Image 3',
            rating: {
                rate: 4.0,
                count: 8,
            },
        },
    ];

    it('should split products into equal chunks', () => {
        const result = splitProducts(products, 2);
        expect(result).toEqual([
            [
                {
                    id: 1,
                    title: 'Product 1',
                    price: 10,
                    description: 'Description 1',
                    category: 'Category 1',
                    image: 'Image 1',
                    rating: {
                        rate: 4.5,
                        count: 10,
                    },
                },
                {
                    id: 2,
                    title: 'Product 2',
                    price: 20,
                    description: 'Description 2',
                    category: 'Category 2',
                    image: 'Image 2',
                    rating: {
                        rate: 3.5,
                        count: 5,
                    },
                },
            ],
            [
                {
                    id: 3,
                    title: 'Product 3',
                    price: 15,
                    description: 'Description 3',
                    category: 'Category 3',
                    image: 'Image 3',
                    rating: {
                        rate: 4.0,
                        count: 8,
                    },
                },
            ],
        ]);
    });

    it('should split return one collection if the split is bigger than the collection', () => {
        const result = splitProducts(products, products.length + 1);
        expect(result.length).toEqual(1);
    });

    it('should NOT split the products collection size is one', () => {
        const result = splitProducts(
            [
                {
                    id: 1,
                    title: 'Product 1',
                    price: 10,
                    description: 'Description 1',
                    category: 'Category 1',
                    image: 'Image 1',
                    rating: {
                        rate: 4.5,
                        count: 10,
                    },
                },
            ],
            3,
        );
        expect(result.length).toEqual(1);
    });
});

describe('Shuffle products tests', () => {
    it('should shuffle an array of two products', () => {
        const products = [
            {
                id: 1,
                title: 'product1',
                price: 10,
                description: 'description1',
                category: 'category1',
                image: '',
                rating: { rate: 3, count: 10 },
            },
            {
                id: 2,
                title: 'product2',
                price: 20,
                description: 'description2',
                category: 'category2',
                image: '',
                rating: { rate: 4, count: 20 },
            },
        ];
        const result = shuffleProducts(products);
        expect(result).not.toBe(products);
        expect(result).toContainEqual(products[0]);
        expect(result).toContainEqual(products[1]);
    });

    it('should shuffle an array of three products', () => {
        const products = [
            {
                id: 1,
                title: 'product1',
                price: 10,
                description: 'description1',
                category: 'category1',
                image: '',
                rating: { rate: 3, count: 10 },
            },
            {
                id: 2,
                title: 'product2',
                price: 20,
                description: 'description2',
                category: 'category2',
                image: '',
                rating: { rate: 4, count: 20 },
            },
            {
                id: 3,
                title: 'product3',
                price: 30,
                description: 'description3',
                category: 'category3',
                image: '',
                rating: { rate: 5, count: 30 },
            },
        ];
        const result = shuffleProducts(products);
        expect(result).not.toBe(products);
        expect(result).toContainEqual(products[0]);
        expect(result).toContainEqual(products[1]);
        expect(result).toContainEqual(products[2]);
    });

    it('should return an empty array when provided with an empty array', () => {
        const result = shuffleProducts([]);
        expect(result).toEqual([]);
    });
});
