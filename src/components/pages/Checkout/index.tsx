/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * This component is the checkout component. This component will be the last
 * component before the the payment for the order which is not available for this
 * assessment task.
 */

import { FC, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addProductToCart,
    clearCartProducts,
    clearSelectedCartProducts,
    deleteProductFromCart,
} from '../../../redux/cart';
import { selectCartProducts } from '../../../redux/cart/selector';
import { StyledContentWrapper } from '../../../style';
import { transformToCurrency } from '../../../tools/helper';
import { Button } from '../../shared/Buttons/Button';
import { ButtonType } from '../../shared/Buttons/style';
import { ConfirmModal } from '../../shared/ConfirmModal';
import { EmptyCart } from '../../shared/EmptyCart';
import { Heading } from '../../shared/Heading';
import { SectionStage } from '../../shared/SectionStage';
import { CheckoutProduct } from './CheckoutProduct';
import {
    StyledCheckoutContainer,
    StyledCheckoutContentWrapper,
    StyledCheckoutHeader,
    StyledCheckoutProducts,
    StyledCheckoutSummary,
    StyledCheckoutSummaryCell,
    StyledCheckoutSummaryTitle,
    StyledCheckoutSummaryValue,
    StyledCheckoutTitle,
    StyledClearCartOption,
} from './style';

// Used for determining the deletion/clearing type the user has initiated.
// The user can delete all cart products 'All' or selected cart products 'Selected'.
enum ClearRequest {
    All = 'All',
    Selected = 'Selected',
}

export const Checkout: FC = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCartProducts);
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
    const [showWarningModal, setShowWarningModal] = useState<ClearRequest | undefined>();

    const handleClearAllRequest = () => {
        // A sensitive operation, so a warning modal will shown first.
        setShowWarningModal(ClearRequest.All);
    };

    const handleClearSelectedRequest = () => {
        if (selectedProducts.length === 0) {
            return;
        }

        // Show warning modal when deleting one or more products
        if (selectedProducts.length > 1) {
            // A sensitive operation, so a warning modal will shown first.
            setShowWarningModal(ClearRequest.Selected);
            return;
        }

        handleConfirmClearSelectedRequest();
    };

    // Should only be used after the user confirmation to remove all products in the cart.
    const handleConfirmClearAllRequest = () => {
        dispatch(clearCartProducts());
        setSelectedProducts([]);
        handleCloseWarningModal();
    };

    // Should only be used after the user confirmation to remove all selected products in the cart.
    const handleConfirmClearSelectedRequest = () => {
        dispatch(clearSelectedCartProducts(selectedProducts));
        setSelectedProducts([]);
        handleCloseWarningModal();
    };

    const handleCloseWarningModal = () => {
        setShowWarningModal(undefined);
    };

    const handleOnChangeProductQuantity = (productId: number, quantity: number) => {
        // Dispatches an action to add current product to cart.
        dispatch(addProductToCart({ productId, quantity }));
    };

    const handleOnDeleteProduct = (productId: number) => {
        // Dispatches an action to delete product from cart
        dispatch(deleteProductFromCart(productId));
    };

    const handleToggleSelectProduct = (productId: number) => {
        // Remove or add product to selected ids
        if (selectedProducts.includes(productId)) {
            setSelectedProducts(selectedProducts.filter((id) => id !== productId));
            return;
        }
        setSelectedProducts([...selectedProducts, productId]);
    };

    // Calculate the total price using useMemo, only when the products change.
    const totalPrice = useMemo(() => {
        return transformToCurrency(
            cartProducts
                .map(({ price, quantity }) => price * quantity)
                .reduce((initialPriceTotal, newPriceTotal) => initialPriceTotal + newPriceTotal, 0),
        );
    }, [cartProducts]);

    return (
        <>
            <StyledCheckoutContainer>
                <StyledContentWrapper>
                    <StyledCheckoutHeader>
                        <StyledCheckoutTitle>
                            <SectionStage description="Your Cart" />
                            <Heading level={2}>Shopping Cart</Heading>
                        </StyledCheckoutTitle>

                        <StyledClearCartOption>
                            <Button
                                label="Clear Selected"
                                disabled={selectedProducts.length === 0}
                                onClick={handleClearSelectedRequest}
                                variation={ButtonType.Light}
                            />

                            <Button
                                label="Clear All"
                                onClick={handleClearAllRequest}
                                variation={ButtonType.Secondary}
                            />
                        </StyledClearCartOption>
                    </StyledCheckoutHeader>

                    <StyledCheckoutContentWrapper>
                        <StyledCheckoutProducts>
                            <>
                                {cartProducts.length > 0 ? (
                                    <>
                                        {cartProducts.map(({ id, image, price, quantity, title }, index) => (
                                            <CheckoutProduct
                                                key={`cart-product-${index}`}
                                                imageSrc={image}
                                                isSelected={selectedProducts.includes(id)}
                                                price={price}
                                                quantity={quantity}
                                                title={title}
                                                onDeleteProduct={() => handleOnDeleteProduct(id)}
                                                onToggleIsSelected={() => handleToggleSelectProduct(id)}
                                                onChangeQuantity={(quantityUpdate: number) =>
                                                    handleOnChangeProductQuantity(id, quantityUpdate)
                                                }
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <EmptyCart />
                                )}
                            </>
                        </StyledCheckoutProducts>
                        <StyledCheckoutSummary>
                            <StyledCheckoutSummaryCell>
                                <StyledCheckoutSummaryTitle>Subtotal</StyledCheckoutSummaryTitle>
                                <StyledCheckoutSummaryValue>{totalPrice}</StyledCheckoutSummaryValue>
                            </StyledCheckoutSummaryCell>
                            <StyledCheckoutSummaryCell>
                                <StyledCheckoutSummaryTitle>Discount</StyledCheckoutSummaryTitle>
                                <StyledCheckoutSummaryValue>$0.00</StyledCheckoutSummaryValue>
                            </StyledCheckoutSummaryCell>
                            <StyledCheckoutSummaryCell>
                                <StyledCheckoutSummaryTitle>Grand total</StyledCheckoutSummaryTitle>
                                <StyledCheckoutSummaryValue>{totalPrice}</StyledCheckoutSummaryValue>
                            </StyledCheckoutSummaryCell>

                            <Button label="Make Payment" onClick={() => null} variation={ButtonType.Secondary} />
                        </StyledCheckoutSummary>
                    </StyledCheckoutContentWrapper>
                </StyledContentWrapper>
            </StyledCheckoutContainer>

            {showWarningModal != null && (
                <ConfirmModal
                    text="This action cannot be reversed"
                    title={`Are you sure you want to clear ${
                        showWarningModal === ClearRequest.All ? 'all' : 'the selected'
                    } products from the cart`}
                    cancelLabel="Cancel"
                    confirmLabel="Yes, clear them"
                    onCancel={handleCloseWarningModal}
                    onConfirm={
                        showWarningModal === ClearRequest.All
                            ? handleConfirmClearAllRequest
                            : handleConfirmClearSelectedRequest
                    }
                />
            )}
        </>
    );
};
