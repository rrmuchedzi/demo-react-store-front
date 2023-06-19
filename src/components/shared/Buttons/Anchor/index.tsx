/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Anchor button component
 */

import { FC } from 'react';
import { CommonButtonProps } from '../style';
import { StyledAnchorButton } from './style';

export interface AnchorButtonProps extends CommonButtonProps {
    label: string;
    path: string;
}

export const AnchorButton: FC<AnchorButtonProps> = ({ label, variation, disabled = false, path }) => {
    return (
        <StyledAnchorButton to={path} variation={variation} disabled={disabled}>
            {label}
        </StyledAnchorButton>
    );
};
