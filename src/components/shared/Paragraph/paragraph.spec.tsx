/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Paragraph } from '.';

describe('Paragraph tests', () => {
    it('renders without crashing', () => {
        const paragraph = 'Hello World';
        const { getByText } = render(<Paragraph>{paragraph}</Paragraph>);
        expect(getByText(paragraph)).toBeInTheDocument();
    });
});
