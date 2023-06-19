/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Shared confirmation modal for confirming sensitive actions before proceeding.
 */

import React, { ReactElement } from 'react';
import { StyledButtonGroup, StyledFullScreenOverlay } from '../../../style';
import { Button } from '../Buttons/Button';
import { Paragraph } from '../Paragraph';
import { ButtonType } from '../Buttons/style';
import { Heading } from '../Heading';
import { StyledConfirmModalDialog, StyledConfirmModal } from './style';

interface ConfirmModalProps {
    title: string;
    text: string | ReactElement;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
    onConfirm,
    onCancel,
    title,
    text,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
}) => (
    <StyledFullScreenOverlay>
        <StyledConfirmModal>
            <StyledConfirmModalDialog data-testid="confirm-modal-dialog-container">
                <Heading level={6}>{title}</Heading>
                <Paragraph>{text}</Paragraph>
                <StyledButtonGroup>
                    {onCancel != null && <Button onClick={onCancel} label={cancelLabel} variation={ButtonType.Light} />}
                    {onConfirm != null && (
                        <Button onClick={onConfirm} label={confirmLabel} variation={ButtonType.Danger} />
                    )}
                </StyledButtonGroup>
            </StyledConfirmModalDialog>
        </StyledConfirmModal>
    </StyledFullScreenOverlay>
);
