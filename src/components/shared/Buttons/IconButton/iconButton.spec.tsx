/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { IconButton } from '.';
import { IconButtonTypes } from './style';

describe('Icon button tests', () => {
    it('should render a button with the correct label', () => {
        const className = 'icon-button-class';
        const onClick = jest.fn();

        render(<IconButton className={className} onIconButtonClick={onClick} iconType={IconButtonTypes.Like} />);
        const button = screen.getByRole('button');
        expect(button.className.includes(className)).toBeTruthy();
    });

    it('should call the onClick function when clicked', () => {
        const onClick = jest.fn();

        render(<IconButton onIconButtonClick={onClick} iconType={IconButtonTypes.Like} />);
        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
