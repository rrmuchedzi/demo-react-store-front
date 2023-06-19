/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * This component is the fallback (404) component for all unknown routes.
 */

import { FC } from 'react';
import { FallbackIllustration } from '../../../resources/FallbackIllustration';
import { StyledContentWrapper } from '../../../style';
import { AnchorButton } from '../../shared/Buttons/Anchor';
import { ButtonType } from '../../shared/Buttons/style';
import { Heading } from '../../shared/Heading';
import { StyledFallback } from './style';

export const Fallback: FC = () => {
    return (
        <StyledFallback>
            <StyledContentWrapper>
                <FallbackIllustration />

                <Heading level={1}>
                    Sorry, there&apos;s
                    <br />
                    Nothing Here
                </Heading>

                <AnchorButton label="Go Home" path="" variation={ButtonType.Primary} />
            </StyledContentWrapper>
        </StyledFallback>
    );
};
