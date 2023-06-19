/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { Meta, Story } from '@storybook/react/types-6-0';
import { ConfirmModal } from '../components/shared/ConfirmModal';

export default {
    title: 'Components/ConfirmModal',
    component: ConfirmModal,
    parameters: {
        docs: {
            description: {
                component: 'The ConfirmModal component is used to show a confirmation dialog.',
            },
        },
    },
} as Meta;

export const AllButtons: Story<{
    title: string;
    text: string;
    confirmLabel?: string;
    cancelLabel?: string;
    danger: boolean;
}> = (args) => (
    <ConfirmModal
        title={args.title}
        text={args.text}
        confirmLabel={args.confirmLabel}
        cancelLabel={args.cancelLabel}
        onCancel={() => undefined}
        onConfirm={() => undefined}
    />
);

export const OnlyConfirm: Story<{ title: string; text: string; confirmLabel?: string }> = (args) => (
    <ConfirmModal title={args.title} text={args.text} confirmLabel={args.confirmLabel} onConfirm={() => undefined} />
);

AllButtons.args = {
    title: 'Confirmation title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam.',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    danger: false,
};

OnlyConfirm.args = {
    title: 'Confirmation title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam.',
    confirmLabel: 'Confirm',
};
