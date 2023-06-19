/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { ButtonType } from '../style';
import { Button } from '.';

describe('Button', () => {
    it('should render a button with the correct label', () => {
        const label = 'A test button';
        const onClick = jest.fn();

        render(<Button variation={ButtonType.Primary} label={label} onClick={onClick} />);
        const button = screen.getByRole('button', { name: label });
        expect(button).toBeInTheDocument();
    });

    it('should call the onClick function when clicked', () => {
        const label = 'A test button';
        const onClick = jest.fn();

        render(<Button variation={ButtonType.Primary} label={label} onClick={onClick} />);
        const button = screen.getByRole('button', { name: label });
        userEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });

    it('should NOT call the onClick on a disabled button', () => {
        const label = 'A test button';
        const onClick = jest.fn();

        render(<Button variation={ButtonType.Primary} disabled={true} label={label} onClick={onClick} />);
        const button = screen.getByRole('button', { name: label });
        userEvent.click(button);
        expect(onClick).not.toHaveBeenCalled();
    });
});
