/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading } from '.';

describe('Heading tests', () => {
    const heading = 'Heading test';
    test('renders component with correct headings', () => {
        for (let level = 1; level < 7; level++) {
            const { getByTestId } = render(<Heading level={level}>{heading}</Heading>);
            const textElement = getByTestId(`heading-title-${level}`);
            expect(textElement).toHaveTextContent(heading);
        }
    });
});
