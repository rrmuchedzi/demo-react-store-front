/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { FC } from 'react';
import { StyledCategoryTag } from './style';

export interface CategoryTagProps {
    category: string;
}

export const CategoryTag: FC<CategoryTagProps> = ({ category }) => {
    return <StyledCategoryTag>{category}</StyledCategoryTag>;
};
