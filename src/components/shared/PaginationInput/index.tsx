/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Pagination menu input controller.
 */

import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { StyledPaginationButton, StyledPaginationCurrentPage, StyledPaginationInput } from './style';

export interface PaginationInputProps {
    current: number; // Index based, from 0 to n.
    totalPages: number;
    onChangePage: (index: number) => void;
}

export const PaginationInput: FC<PaginationInputProps> = ({ current, totalPages, onChangePage }) => {
    const handleChangePagination = (isIncrementing: boolean) => {
        // We ensure we do not increment above the total pages or decrement below 0
        if ((isIncrementing && current === totalPages - 1) || (!isIncrementing && current === 0)) {
            return;
        }
        onChangePage(isIncrementing ? current + 1 : current - 1);
    };

    return (
        <StyledPaginationInput>
            <StyledPaginationButton
                disabled={current === 0}
                type="button"
                onClick={() => handleChangePagination(false)}
            >
                <ChevronLeft size={20} />
            </StyledPaginationButton>
            <StyledPaginationCurrentPage>{current + 1}</StyledPaginationCurrentPage>
            <StyledPaginationButton
                disabled={current === totalPages - 1}
                type="button"
                onClick={() => handleChangePagination(true)}
            >
                <ChevronRight size={20} />
            </StyledPaginationButton>
        </StyledPaginationInput>
    );
};
