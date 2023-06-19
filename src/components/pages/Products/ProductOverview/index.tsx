/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Shows an overview of the selected product including details.
 */

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectIsLoadingProducts, selectProductDetails } from '../../../../redux/products/selector';
import { StyledSectionContainer, StyledContentWrapper } from '../../../../style';
import { Loader } from '../../../shared/Loader';
import { ProductDetails } from '../ProductDetails';
import { ProductsSuggestion } from '../ProductsSuggestion';

export const ProductOverview: FC = () => {
    const { id } = useParams();
    const isLoadingProducts = useSelector(selectIsLoadingProducts);
    const product = useSelector(selectProductDetails(parseInt(id ?? '', 10)));

    return (
        <StyledSectionContainer>
            <StyledContentWrapper>
                {product != null && (
                    <ProductDetails
                        id={product.id}
                        price={product.price}
                        title={product.title}
                        image={product.image}
                        rating={product.rating}
                        category={product.category}
                        description={product.description}
                    />
                )}

                {isLoadingProducts && product != null && <Loader />}
            </StyledContentWrapper>

            {product != null && <ProductsSuggestion excludeId={product.id} targetCategory={product.category} />}
        </StyledSectionContainer>
    );
};
