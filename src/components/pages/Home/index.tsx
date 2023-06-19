/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Store front landing page or main/home component.
 */

import { FC } from 'react';
import { StyledContentWrapper } from '../../../style';
import heroImage from '../../../resources/img/hero-products.png';
import { AnchorButton } from '../../shared/Buttons/Anchor';
import { ButtonType } from '../../shared/Buttons/style';
import { Heading } from '../../shared/Heading';
import { StyledHeroDetailsWrapper, StyledHeroImageWrapper, StyledHomeHeader, StyledHomeHeroContainer } from './style';
import { ProductsExplore } from './ProductsExplore';

export const Home: FC = () => {
    return (
        <>
            <StyledHomeHeader>
                <StyledContentWrapper>
                    <StyledHomeHeroContainer>
                        <StyledHeroDetailsWrapper>
                            <Heading level={1}>
                                We offer a wide range of affordable new and refurbished products
                            </Heading>
                            <AnchorButton label="Shop Now" path="products" variation={ButtonType.Primary} />
                        </StyledHeroDetailsWrapper>

                        <StyledHeroImageWrapper>
                            <img src={heroImage} />
                        </StyledHeroImageWrapper>
                    </StyledHomeHeroContainer>
                </StyledContentWrapper>
            </StyledHomeHeader>

            <ProductsExplore />
        </>
    );
};
