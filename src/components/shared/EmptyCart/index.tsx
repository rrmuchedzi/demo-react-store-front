/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * A shared placeholder component for empty cart
 */

import { FC } from 'react';
import { EmptyIllustration } from '../../../resources/EmptyIllustration';
import { Heading } from '../Heading';
import { StyledEmptyCartPlaceholderWrapper } from './style';

export const EmptyCart: FC = () => (
    <StyledEmptyCartPlaceholderWrapper>
        <EmptyIllustration />
        <Heading level={5}>Your cart is empty</Heading>
    </StyledEmptyCartPlaceholderWrapper>
);
