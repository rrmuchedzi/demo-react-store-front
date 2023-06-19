/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { FC, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledContentWrapper, StyledProductsListLoader } from '../../../style';
import {
    StyledProductsContainer,
    StyledProductsFilterContainer,
    StyledProductsListContainer,
    StyledProductsPagination,
    StyledResetFilterContainer,
    StyledResetFilters,
} from './style';
import { SelectInput } from '../../shared/SelectInput';
import { ProductSortingOptions } from '../../../api/ constants/filter';
import {
    selectIsLoadingProducts,
    selectProductCategories,
    selectProductsCollection,
} from '../../../redux/products/selector';
import { ProductCard } from '../../shared/ProductCard';
import { Loader } from '../../shared/Loader';
import { sortProducts, splitProducts } from '../../../tools/helper';
import { PaginationInput } from '../../shared/PaginationInput';
import { ALL_PRODUCTS_CATEGORY } from '../../../api/ constants/products';
import { Refresh } from 'tabler-icons-react';

export const Products: FC = () => {
    // Initialize sort options for the products.
    const sortingOptions = Object.values(ProductSortingOptions);
    const [selectedPageIndex, setSelectedPageIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(ALL_PRODUCTS_CATEGORY);
    const [selectedSortOption, setSelectedSortingOption] = useState(ProductSortingOptions.Acs);

    // Create selectors to the products store for content and updates.
    const isLoadingProducts = useSelector(selectIsLoadingProducts);
    const products = useSelector(selectProductsCollection);
    const categories = useSelector(selectProductCategories);

    const resetScrollPosition = () => {
        // Scroll to the top when the selected page or any filter changes.
        window.scrollTo(0, 0);
    };

    const handleChangeSortingPreference = (operation: ProductSortingOptions) => {
        setSelectedSortingOption(operation);

        // Reset selected page index when sorting changes.
        setSelectedPageIndex(0);

        // Reset scroll position.
        resetScrollPosition();
    };

    const handleChangeCategoryPreference = (category: string) => {
        setSelectedCategory(category);

        // Reset selected page index when sorting changes.
        setSelectedPageIndex(0);

        // Reset scroll position.
        resetScrollPosition();
    };

    // Split the products into different pages.
    const productPages = useMemo(() => {
        const filteredProducts =
            selectedCategory === ALL_PRODUCTS_CATEGORY
                ? products
                : products.filter(({ category }) => category === selectedCategory);
        const sortedProducts = sortProducts(filteredProducts, selectedSortOption);
        return splitProducts(sortedProducts, 9);
    }, [products, selectedSortOption, selectedCategory]);

    // Handle pagination change request.
    const handleSelectedPageIndexChange = (pageIndex: number) => {
        if (pageIndex > productPages.length - 1 || pageIndex < 0) {
            return;
        }
        setSelectedPageIndex(pageIndex);

        // Reset scroll position.
        resetScrollPosition();
    };

    const handleResetFilters = () => {
        setSelectedCategory(ALL_PRODUCTS_CATEGORY);
        setSelectedSortingOption(ProductSortingOptions.Acs);
    };

    const canResetFilters = useMemo(() => {
        return selectedCategory !== ALL_PRODUCTS_CATEGORY || selectedSortOption !== ProductSortingOptions.Acs;
    }, [selectedCategory, selectedSortOption]);

    return (
        <StyledProductsContainer>
            <StyledContentWrapper>
                <StyledProductsFilterContainer>
                    {categories.length > 1 && (
                        <SelectInput
                            options={categories}
                            selected={selectedCategory}
                            onValueChange={handleChangeCategoryPreference}
                        />
                    )}

                    <SelectInput
                        selected={selectedSortOption}
                        options={sortingOptions}
                        onValueChange={(value: string) => handleChangeSortingPreference(value as ProductSortingOptions)}
                    />
                </StyledProductsFilterContainer>

                <StyledResetFilterContainer>
                    {canResetFilters && (
                        <StyledResetFilters type="button" onClick={handleResetFilters}>
                            Reset All <Refresh size={18} />{' '}
                        </StyledResetFilters>
                    )}
                </StyledResetFilterContainer>

                {productPages.length > 0 && (
                    <StyledProductsListContainer>
                        {productPages[selectedPageIndex].map(({ id, price, image, title, rating, category }) => (
                            <ProductCard
                                id={id}
                                image={image}
                                price={price}
                                title={title}
                                category={category}
                                rating={rating.rate}
                                count={rating.count}
                                key={`product-card-${id}`}
                            />
                        ))}
                    </StyledProductsListContainer>
                )}

                {productPages.length > 1 && (
                    <StyledProductsPagination>
                        <PaginationInput
                            current={selectedPageIndex}
                            totalPages={productPages.length}
                            onChangePage={handleSelectedPageIndexChange}
                        />
                    </StyledProductsPagination>
                )}

                {isLoadingProducts && (
                    <StyledProductsListLoader isLoadingAll={products.length === 0}>
                        <Loader />
                    </StyledProductsListLoader>
                )}
            </StyledContentWrapper>
        </StyledProductsContainer>
    );
};
