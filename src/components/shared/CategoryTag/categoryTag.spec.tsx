/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CategoryTag } from '.';

describe('Category tag tests', () => {
    it('should render category tag correctly', () => {
        const category = 'mens wear';
        const { getByText } = render(<CategoryTag category={category} />);
        expect(getByText(category)).toBeInTheDocument();
    });
});
