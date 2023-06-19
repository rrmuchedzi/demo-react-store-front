/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { FC, PropsWithChildren } from 'react';
import { StyledParagraph } from './style';

export interface ParagraphProps {
    title?: string;
}

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({ children, title }) => {
    return <StyledParagraph title={title}>{children}</StyledParagraph>;
};
