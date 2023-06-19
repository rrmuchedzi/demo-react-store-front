/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from '.';

describe('Checkbox tests', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(
            <Checkbox
                isChecked={false}
                onToggleCheckbox={() => {
                    // do nothing in here for the test
                }}
            />,
        );
        const checkbox = getByTestId('checkbox');
        expect(checkbox).toBeInTheDocument();
    });

    it('should call onToggleCheckbox when clicked', () => {
        const onToggleCheckbox = jest.fn();
        const { getByTestId } = render(<Checkbox isChecked={false} onToggleCheckbox={onToggleCheckbox} />);
        const checkbox = getByTestId('checkbox');
        fireEvent.click(checkbox);
        expect(onToggleCheckbox).toHaveBeenCalled();
    });

    it('should not call onToggleCheckbox when clicked if disabled', () => {
        const onToggleCheckbox = jest.fn();
        const { getByTestId } = render(
            <Checkbox isChecked={false} disabled={true} onToggleCheckbox={onToggleCheckbox} />,
        );
        const checkbox = getByTestId('checkbox');
        fireEvent.click(checkbox);
        expect(onToggleCheckbox).not.toHaveBeenCalled();
    });
});
