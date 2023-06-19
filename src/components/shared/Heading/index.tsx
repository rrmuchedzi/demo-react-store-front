/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Shared headings component. It provides headings defined using the <h1> to <h6> tags
 */

import { FC, PropsWithChildren } from 'react';
import {
    StyledHeadingFour,
    StyledHeadingOne,
    StyledHeadingThree,
    StyledHeadingTwo,
    StyledHeadingSix,
    StyledHeadingFive,
} from './style';

export interface HeadingProps {
    title?: string;
    className?: string;
    level: number;
}

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({ className, level, children, title }) => {
    switch (level) {
        case 1:
            return (
                <StyledHeadingOne data-testid="heading-title-1" title={title} className={className}>
                    {children}
                </StyledHeadingOne>
            );
        case 2:
            return (
                <StyledHeadingTwo data-testid="heading-title-2" title={title} className={className}>
                    {children}
                </StyledHeadingTwo>
            );
        case 3:
            return (
                <StyledHeadingThree data-testid="heading-title-3" title={title} className={className}>
                    {children}
                </StyledHeadingThree>
            );
        case 4:
            return (
                <StyledHeadingFour data-testid="heading-title-4" title={title} className={className}>
                    {children}
                </StyledHeadingFour>
            );
        case 5:
            return (
                <StyledHeadingFive data-testid="heading-title-5" title={title} className={className}>
                    {children}
                </StyledHeadingFive>
            );
        case 6:
            return (
                <StyledHeadingSix data-testid="heading-title-6" title={title} className={className}>
                    {children}
                </StyledHeadingSix>
            );
        default:
            return null;
    }
};
