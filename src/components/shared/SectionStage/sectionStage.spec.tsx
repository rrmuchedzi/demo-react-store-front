/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SectionStage } from '.';

describe('Section stage tests', () => {
    it('renders the section stage value', () => {
        const description = 'A section stage';
        const { getByTestId } = render(<SectionStage description={description} />);
        const sectionStage = getByTestId('section-stage-id');
        expect(sectionStage).toHaveTextContent(description);
    });
});
