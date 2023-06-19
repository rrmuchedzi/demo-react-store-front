/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { RatingTag } from '.';

describe('Rating tag tests', () => {
    it('renders the rating value', () => {
        const rating = 3;
        const { getByTestId } = render(<RatingTag rating={rating} />);
        const ratingValue = getByTestId('rating-value');
        expect(ratingValue).toHaveTextContent(rating.toString());
    });
});
