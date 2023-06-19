/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Product rating component.
 */

import { FC } from 'react';
import { Star } from 'tabler-icons-react';
import { StyledRatingCounter, StyledRatingContainer } from './style';

export interface RatingProps {
    rating: number;
}

export const RatingTag: FC<RatingProps> = ({ rating }) => {
    return (
        <StyledRatingContainer>
            <StyledRatingCounter data-testid="rating-value">{rating}</StyledRatingCounter>
            <Star size={18} />
        </StyledRatingContainer>
    );
};
