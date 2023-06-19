/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * This component is only used to trigger scrolling to the top when
 * the route changes. It should be used in the context of the Route
 * component.
 */

import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const RouterTopScroll: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to the top when route changes.
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
