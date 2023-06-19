/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { FC } from 'react';
import { StyledSectionStage } from './style';

interface SectionStageProps {
    description: string;
}

export const SectionStage: FC<SectionStageProps> = ({ description }) => (
    <StyledSectionStage data-testid="section-stage-id">{description}</StyledSectionStage>
);
