/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Provides an overview of available products for the home component.
 * Only a limited number of products will be shown here.
 */

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectExploreProducts } from '../../../../redux/products/selector';
import { appRoutes } from '../../../../routes';
import { StyledContentWrapper, StyledProductsListLoader, StyledSectionContainer } from '../../../../style';
import { AnchorButton } from '../../../shared/Buttons/Anchor';
import { ButtonType } from '../../../shared/Buttons/style';
import { Heading } from '../../../shared/Heading';
import { Loader } from '../../../shared/Loader';
import { ProductCard } from '../../../shared/ProductCard';
import { SectionStage } from '../../../shared/SectionStage';
import { StyledExploreButton, StyledProductsExplorerContent } from './style';

export const ProductsExplore: FC = () => {
    const products = useSelector(selectExploreProducts);

    return (
        <StyledSectionContainer>
            <StyledContentWrapper>
                <SectionStage description="Our Products" />
                <Heading level={2}>Explore Our Products</Heading>

                {products.length > 0 ? (
                    <StyledProductsExplorerContent>
                        {products.map(({ id, price, image, title, rating, category }) => (
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
                    </StyledProductsExplorerContent>
                ) : (
                    <StyledProductsListLoader isLoadingAll={products.length === 0}>
                        <Loader />
                    </StyledProductsListLoader>
                )}

                <StyledExploreButton>
                    <AnchorButton
                        variation={ButtonType.Secondary}
                        label="View all products"
                        path={appRoutes.Products}
                    />
                </StyledExploreButton>
            </StyledContentWrapper>
        </StyledSectionContainer>
    );
};
