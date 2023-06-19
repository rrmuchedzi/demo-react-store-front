/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Shared product card component. Used to render each product as a card/cell.
 */

import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../../redux/cart';
import { selectIsProductInCart } from '../../../redux/cart/selector';
import { addProductToFavorites, deleteProductFromFavorites } from '../../../redux/favourites';
import { selectIsFavoriteProduct } from '../../../redux/favourites/selector';
import { appRoutes } from '../../../routes';
import { transformToCurrency } from '../../../tools/helper';
import { IconButton } from '../Buttons/IconButton';
import { IconButtonTypes } from '../Buttons/IconButton/style';
import { Heading } from '../Heading';
import { RatingTag } from '../Rating';
import {
    StyledInCartIndicator,
    StyledOutOfStockIndicator,
    StyledProductCard,
    StyledProductCardDetails,
    StyledProductCardImage,
    StyledProductCardPrice,
    StyledProductCategory,
} from './style';

export interface ProductCardProps {
    id: number;
    price: number;
    image: string;
    title: string;
    category: string;
    rating: number;
    count: number;
}

export const ProductCard: FC<ProductCardProps> = ({ id, image, price, rating, count, title, category }) => {
    const dispatch = useDispatch();
    const isProductInCart = useSelector(selectIsProductInCart(id));
    const isFavoriteProduct = useSelector(selectIsFavoriteProduct(id));

    const onAddProductToCart = () => {
        // Dispatches an action to add current product to cart.
        dispatch(addProductToCart({ productId: id, quantity: 1 }));
    };

    const onAddToFavorites = () => {
        // Dispatches an action to add or remove current product to favorites.
        if (isFavoriteProduct) {
            return dispatch(deleteProductFromFavorites(id));
        }
        dispatch(addProductToFavorites(id));
    };

    return (
        <StyledProductCard to={`${appRoutes.Products}/${id}`} data-testid="product-card">
            <StyledProductCardImage>
                <RatingTag data-testid="product-card-rating" rating={rating} />
                <LazyLoadImage data-testid="product-card-image" src={image} width={600} height={400} alt={title} />
            </StyledProductCardImage>

            <StyledProductCardDetails>
                <Heading data-testid="product-card-title" level={6} title={title}>
                    {title}
                </Heading>
                <StyledProductCategory data-testid="product-card-category">{category}</StyledProductCategory>
                <div className="pricing">
                    <StyledProductCardPrice data-testid="product-card-price">
                        {transformToCurrency(price)}
                    </StyledProductCardPrice>
                    {isProductInCart ? (
                        <StyledInCartIndicator>In Cart</StyledInCartIndicator>
                    ) : (
                        <>
                            {count > 0 ? (
                                <IconButton
                                    size={40}
                                    iconType={IconButtonTypes.Cart}
                                    onIconButtonClick={onAddProductToCart}
                                />
                            ) : (
                                <StyledOutOfStockIndicator>Out of Stock</StyledOutOfStockIndicator>
                            )}
                        </>
                    )}
                    <IconButton
                        size={40}
                        iconType={IconButtonTypes.Like}
                        active={isFavoriteProduct}
                        onIconButtonClick={onAddToFavorites}
                    />
                </div>
            </StyledProductCardDetails>
        </StyledProductCard>
    );
};
