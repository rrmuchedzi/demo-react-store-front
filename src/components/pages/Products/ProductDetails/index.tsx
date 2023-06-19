/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Renders and show additional details about a product.
 */

import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MIN_PRODUCT_ORDER_COUNT, MAX_PRODUCT_ORDER_COUNT } from '../../../../api/ constants/products';
import { Product } from '../../../../api/types/product';
import { addProductToCart } from '../../../../redux/cart';
import { selectIsProductInCart } from '../../../../redux/cart/selector';
import { addProductToFavorites, deleteProductFromFavorites } from '../../../../redux/favourites';
import { selectIsFavoriteProduct } from '../../../../redux/favourites/selector';
import { transformToCurrency } from '../../../../tools/helper';
import { Button } from '../../../shared/Buttons/Button';
import { IconButton } from '../../../shared/Buttons/IconButton';
import { IconButtonTypes } from '../../../shared/Buttons/IconButton/style';
import { ButtonType } from '../../../shared/Buttons/style';
import { CounterInput } from '../../../shared/CounterInput';
import { Heading } from '../../../shared/Heading';
import { CategoryTag } from '../../../shared/CategoryTag';
import { RatingTag } from '../../../shared/Rating';
import { SectionStage } from '../../../shared/SectionStage';
import {
    StyledProductAdditionalInfo,
    StyledProductDetailsHeader,
    StyledProductDetailsImage,
    StyledProductInformationWrapper,
    StyledProductOutOfStock,
} from '../style';
import { AnchorButton } from '../../../shared/Buttons/Anchor';
import { appRoutes } from '../../../../routes';

export const ProductDetails: FC<Product> = ({ id, category, description, image, price, rating, title }) => {
    const dispatch = useDispatch();
    const [orderUnits, setOrderUnits] = useState(MIN_PRODUCT_ORDER_COUNT);
    const isFavoriteProduct = useSelector(selectIsFavoriteProduct(id));
    const isProductInCart = useSelector(selectIsProductInCart(id));

    const onAddProductToCart = () => {
        // Dispatches an action to add current product to cart.
        dispatch(addProductToCart({ productId: id, quantity: orderUnits }));
    };

    const onAddToFavorites = () => {
        // Dispatches an action to add or remove current product to favorites.
        if (isFavoriteProduct) {
            return dispatch(deleteProductFromFavorites(id));
        }
        dispatch(addProductToFavorites(id));
    };

    // User should not be allowed to order more that the available stock.
    // For example, if count is 5, the user can only order 5 units maximum.
    const orderLimit = rating.count > MAX_PRODUCT_ORDER_COUNT ? MAX_PRODUCT_ORDER_COUNT : rating.count;

    return (
        <StyledProductDetailsHeader>
            <StyledProductDetailsImage>
                <RatingTag rating={rating.rate} />
                <img src={image} alt={title} />
            </StyledProductDetailsImage>

            <StyledProductInformationWrapper>
                <SectionStage description="Product overview" />
                <Heading level={3}>{title}</Heading>

                <div className="pricing-category-content">
                    <CategoryTag category={category} />
                    <div className="product-pricing">{transformToCurrency(price)}</div>
                </div>

                <p className="pricing-description-content long-copy">{description}</p>

                {rating.count > 0 ? (
                    <>
                        <StyledProductAdditionalInfo>
                            Only {rating.count} left in stock{' '}
                            <IconButton
                                iconType={IconButtonTypes.Like}
                                active={isFavoriteProduct}
                                onIconButtonClick={onAddToFavorites}
                            />
                        </StyledProductAdditionalInfo>

                        <div className="product-details-cart-options">
                            <CounterInput
                                value={orderUnits}
                                max={orderLimit}
                                min={MIN_PRODUCT_ORDER_COUNT}
                                onChangeCounterValue={setOrderUnits}
                            />

                            <Button
                                variation={isProductInCart ? ButtonType.Secondary : ButtonType.Primary}
                                label={isProductInCart ? 'Update Cart' : 'Add to Cart'}
                                onClick={onAddProductToCart}
                            />
                        </div>

                        <div className="product-details-proceed-to-checkout">
                            <AnchorButton
                                path={appRoutes.Checkout}
                                variation={ButtonType.Light}
                                label="Proceed to Checkout"
                            />
                        </div>
                    </>
                ) : (
                    <StyledProductOutOfStock>Out of stock</StyledProductOutOfStock>
                )}
            </StyledProductInformationWrapper>
        </StyledProductDetailsHeader>
    );
};
