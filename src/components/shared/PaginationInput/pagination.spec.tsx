/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PaginationInput } from '.';

describe('Pagination tests', () => {
    test('renders pagination input', () => {
        const { getByText } = render(<PaginationInput current={0} totalPages={10} onChangePage={(_) => null} />);
        const linkElement = getByText(/1/i);
        expect(linkElement).toBeInTheDocument();
    });
});
