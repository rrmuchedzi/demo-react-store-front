/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { Provider } from 'react-redux';
import { ProductCard, ProductCardProps } from '.';
import { history, store } from '../../../store';
import { transformToCurrency } from '../../../tools/helper';

describe('Product card tests', () => {
    const productCardProps: ProductCardProps = {
        category: 'shoes',
        id: 1,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        price: 200.0,
        rating: 3,
        title: 'Product card test',
        count: 89,
    };

    it('should render category tag correctly', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Router history={history}>
                    <ProductCard {...productCardProps} />
                </Router>
            </Provider>,
        );
        const title = getByTestId('heading-title-6');
        expect(title).toHaveTextContent(productCardProps.title);

        const price = getByTestId('product-card-price');
        expect(price).toHaveTextContent(transformToCurrency(productCardProps.price));

        const category = getByTestId('product-card-category');
        expect(category).toHaveTextContent(productCardProps.category);

        const image = getByTestId('product-card-image') as HTMLImageElement;
        expect(image.src).toContain(productCardProps.image);
    });
});
