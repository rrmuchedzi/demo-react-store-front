/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AnchorButton } from '.';
import { ButtonType } from '../style';
import { history } from '../../../../store';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

describe('Button', () => {
    it('renders the label', () => {
        const label = 'A test button';
        render(
            <Router history={history}>
                <AnchorButton label={label} variation={ButtonType.Primary} path="/home" />
            </Router>,
        );
        expect(screen.getByText(label)).toBeInTheDocument();
    });
});
