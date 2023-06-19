/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Standard application navigation component. It offers easy access to
 * available menu/pages available on the application.
 */

import { FC } from 'react';
import {
    StyledMenuNotifier,
    StyledNavigation,
    StyledNavigationCartTray,
    StyledNavigationLogo,
    StyledNavigationMenu,
    StyledNavigationMenuOption,
    StyledNavigationMenuOptions,
    StyledNavigationMenusGroup,
    StyledNavigationWrapper,
} from './style';
import { StoreLogo } from '../../../resources/StoreLogo';
import { ShoppingCart } from 'tabler-icons-react';
import { Cart } from '../../general/Cart';
import { appRoutes } from '../../../routes';
import { useSelector } from 'react-redux';
import { selectHasProductsInCart } from '../../../redux/cart/selector';

export const Navigation: FC = () => {
    const hasProductsInCart = useSelector(selectHasProductsInCart);
    return (
        <StyledNavigation>
            <StyledNavigationWrapper>
                <StyledNavigationLogo to={appRoutes.Home}>
                    <StoreLogo />
                </StyledNavigationLogo>
                <StyledNavigationMenusGroup>
                    <StyledNavigationMenu
                        to={appRoutes.Home}
                        className={({ isActive }) => (isActive ? 'active' : undefined)}
                    >
                        <span>Home</span>
                    </StyledNavigationMenu>
                    <StyledNavigationMenu
                        to={appRoutes.Products}
                        className={({ isActive }) => (isActive ? 'active' : undefined)}
                    >
                        <span>Products</span>
                    </StyledNavigationMenu>
                </StyledNavigationMenusGroup>

                <StyledNavigationMenuOptions>
                    <StyledNavigationMenuOption>
                        <ShoppingCart size={24} />
                        {hasProductsInCart && <StyledMenuNotifier />}
                        <StyledNavigationCartTray>
                            <Cart />
                        </StyledNavigationCartTray>
                    </StyledNavigationMenuOption>
                </StyledNavigationMenuOptions>
            </StyledNavigationWrapper>
        </StyledNavigation>
    );
};
