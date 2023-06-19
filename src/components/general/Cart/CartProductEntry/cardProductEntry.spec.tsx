/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { CartProductEntry } from '.';
import { history, store } from '../../../../store';

describe('Cart product entry tests', () => {
    test('renders an image with a valid source URL', () => {
        render(
            <Provider store={store}>
                <Router history={history}>
                    <CartProductEntry
                        id={1}
                        imageSrc="https://example.com/image.jpg"
                        title="Product Title"
                        price={10}
                        quantity={1}
                        onDeleteCartProduct={() => {
                            // do nothing in here for the test
                        }}
                    />
                </Router>
            </Provider>,
        );
        const image = screen.getByAltText('Product Title');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    });

    test('renders a title with a valid string value', () => {
        render(
            <Provider store={store}>
                <Router history={history}>
                    <CartProductEntry
                        id={1}
                        imageSrc="https://example.com/image.jpg"
                        title="Product Title"
                        price={10}
                        quantity={1}
                        onDeleteCartProduct={() => {
                            // do nothing in here for the test
                        }}
                    />
                </Router>
            </Provider>,
        );
        const title = screen.getByText('Product Title');
        expect(title).toBeInTheDocument();
    });

    it('should call the onClick function when clicking the delete button', () => {
        const onClick = jest.fn();

        render(
            <Provider store={store}>
                <Router history={history}>
                    <CartProductEntry
                        id={1}
                        imageSrc="https://example.com/image.jpg"
                        title="Product Title"
                        price={10}
                        quantity={1}
                        onDeleteCartProduct={onClick}
                    />
                </Router>
            </Provider>,
        );

        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
