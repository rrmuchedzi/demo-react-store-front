/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * A shared checkbox component for making binary choices.
 */

import { FC } from 'react';
import { Square, SquareCheck } from 'tabler-icons-react';
import { StyledCheckbox } from './style';

interface CheckboxProps {
    isChecked: boolean;
    disabled?: boolean;
    onToggleCheckbox: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({ isChecked, disabled = false, onToggleCheckbox }) => {
    const handleOnToggleCheckbox = () => {
        // If the checkbox is disabled, no change events should be emitted.
        if (disabled) {
            return;
        }
        onToggleCheckbox();
    };

    return (
        <StyledCheckbox
            type="button"
            isChecked={isChecked}
            disabled={disabled}
            onClick={handleOnToggleCheckbox}
            data-testid="checkbox"
        >
            {isChecked ? <SquareCheck size={24} /> : <Square size={24} />}
        </StyledCheckbox>
    );
};
