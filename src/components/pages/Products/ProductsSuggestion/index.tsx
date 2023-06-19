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
import { selectProductSuggestions } from '../../../../redux/products/selector';
import { appRoutes } from '../../../../routes';
import { StyledContentWrapper } from '../../../../style';
import { AnchorButton } from '../../../shared/Buttons/Anchor';
import { ButtonType } from '../../../shared/Buttons/style';
import { Heading } from '../../../shared/Heading';
import { ProductCard } from '../../../shared/ProductCard';
import { SectionStage } from '../../../shared/SectionStage';
import { StyledProductSuggestionsButton, StyledProductSuggestionsContent } from './style';

interface ProductsSuggestionProps {
    excludeId: number;
    targetCategory: string;
}

export const ProductsSuggestion: FC<ProductsSuggestionProps> = ({ targetCategory, excludeId }) => {
    const products = useSelector(selectProductSuggestions(excludeId, targetCategory));
    return (
        <>
            {products.length > 0 && (
                <StyledContentWrapper>
                    <SectionStage description="Explore More" />
                    <Heading level={2}>Related Products</Heading>

                    <StyledProductSuggestionsContent>
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
                    </StyledProductSuggestionsContent>

                    <StyledProductSuggestionsButton>
                        <AnchorButton
                            variation={ButtonType.Secondary}
                            label="Continue Shopping"
                            path={appRoutes.Products}
                        />
                    </StyledProductSuggestionsButton>
                </StyledContentWrapper>
            )}
        </>
    );
};
