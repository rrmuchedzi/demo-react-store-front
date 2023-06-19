/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Normal button component
 */

import { FC } from 'react';
import { CommonButtonProps } from '../style';
import { StyledButton } from './style';

export interface ButtonProps extends CommonButtonProps {
    label: string;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ label, variation, disabled = false, onClick }) => {
    return (
        <StyledButton type="button" onClick={onClick} variation={variation} disabled={disabled}>
            {label}
        </StyledButton>
    );
};
