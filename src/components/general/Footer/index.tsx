/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Shared footer component for the application.
 */

import { FC } from 'react';
import { StoreLogo } from '../../../resources/StoreLogo';
import { appRoutes } from '../../../routes';
import { StyledContentWrapper, StyledNavLink } from '../../../style';
import {
    StyledFooter,
    StyledFooterContentWrapper,
    StyledFooterCopyright,
    StyledFooterLogo,
    StyledFooterMenu,
    StyledFooterMenuOptions,
} from './style';

export const Footer: FC = () => {
    return (
        <StyledFooter>
            <StyledContentWrapper>
                <StyledFooterContentWrapper>
                    <StyledFooterLogo>
                        <StoreLogo />
                    </StyledFooterLogo>

                    <StyledFooterMenuOptions>
                        <StyledFooterMenu>
                            <StyledNavLink to={appRoutes.Home}>Home</StyledNavLink>
                        </StyledFooterMenu>

                        <StyledFooterMenu>
                            <StyledNavLink to={appRoutes.Products}>Products</StyledNavLink>
                        </StyledFooterMenu>
                    </StyledFooterMenuOptions>

                    <StyledFooterCopyright>
                        <span>© 2023 - All rights reserved</span>
                    </StyledFooterCopyright>
                </StyledFooterContentWrapper>
            </StyledContentWrapper>
        </StyledFooter>
    );
};
