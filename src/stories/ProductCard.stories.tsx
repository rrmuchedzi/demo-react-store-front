/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProductCard, ProductCardProps } from '../components/shared/ProductCard';
import { store } from '../store';

const meta: Meta = {
    title: 'Components/Products',
    component: ProductCard,
    parameters: {
        docs: {
            description: {
                component: 'The Counter Input as a number value input',
            },
        },
    },
    decorators: [
        (ProductCardPartial) => (
            <Provider store={store}>
                <ProductCardPartial />
            </Provider>
        ),
    ],
};
export default meta;

export const ProductCardStory: Story<ProductCardProps> = ({ category, count, id, image, price, title, rating }) => {
    return (
        <BrowserRouter>
            <ProductCard
                id={id}
                count={count}
                image={image}
                price={price}
                title={title}
                category={category}
                rating={rating}
            />
        </BrowserRouter>
    );
};

ProductCardStory.args = {
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    category: 'clothing',
    id: 90,
    price: 7.99,
    rating: 4.2,
    count: 89,
    title: 'Another perfect top for the testing occasion',
};
