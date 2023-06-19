/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

export interface CartProduct {
    productId: number;
    quantity: number;
}

export interface GetUserCartResponse {
    id: number;
    date: string;
    userId: number;
    products: CartProduct[];
}

export interface UpdateUserCardRequest {
    date: string;
    userId: number;
    products: CartProduct[];
}

export interface CartProductPreview {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}
