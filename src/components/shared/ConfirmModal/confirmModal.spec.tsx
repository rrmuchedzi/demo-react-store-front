/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { ConfirmModal } from '.';

describe('Confirm Modal tests', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(<ConfirmModal title="Title" text="Text" />);
        const confirmModalDialogContainer = getByTestId('confirm-modal-dialog-container');
        expect(confirmModalDialogContainer).toBeInTheDocument();
    });

    it('should call onConfirm when confirm button is clicked', () => {
        const onConfirm = jest.fn();
        const { getByText } = render(<ConfirmModal title="Title" text="Text" onConfirm={onConfirm} />);
        const confirmButton = getByText('Confirm');
        fireEvent.click(confirmButton);
        expect(onConfirm).toHaveBeenCalled();
    });

    it('should call onCancel when cancel button is clicked', () => {
        const onCancel = jest.fn();
        const { getByText } = render(<ConfirmModal title="Title" text="Text" onCancel={onCancel} />);
        const cancelButton = getByText('Cancel');
        fireEvent.click(cancelButton);
        expect(onCancel).toHaveBeenCalled();
    });
});
